// Programm-Infotexte in die zusätzliche Druckansicht aufnehmen.
(function(w){
 'use strict';var pending=0,loaded=false,failed=false,d=w.document;
 var diagnostics=w.__PEP_PRINT_STATE__={batches:0,rules:0,notes:0,pending:0,loaded:false,failed:false};
 // Den Fortschritt der Druckansicht anzeigen.
 function status(){diagnostics.pending=pending;diagnostics.loaded=loaded;diagnostics.failed=failed;var p=d.getElementById('pep-print-status');if(!p){return;}p.textContent=failed?'Infotexte konnten nicht vollständig geladen werden. Bitte Sitzung prüfen und Druckansicht neu öffnen.':loaded&&pending===0?'Programme und gespeicherte Infotexte vollständig geladen.':'Programme und gespeicherte Infotexte werden geladen …';}
 // Einen Infotext zum Druckabschnitt hinzufügen.
 function note(host,text,label,first){if(!host||!text){return;}var e=d.createElement('div');e.className='pep-print-note';var b=d.createElement('strong');b.textContent=label+': ';e.appendChild(b);e.appendChild(d.createTextNode(text));if(first){host.insertBefore(e,host.firstChild);}else{host.appendChild(e);}}
 // Infotexte für ein Programm anfordern.
 function fetchNotes(pid){
  diagnostics.notes++;
  pending++;status();var x=new XMLHttpRequest();x.open('POST','/addons/ewebui/ewebui.cgi',true);x.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  x.onload=/* Die geladenen Infotexte an die Druckansicht übergeben. */ function(){
   try{
    if(x.status!==200||x.responseText.indexOf('OK|')!==0){throw new Error('notes');}
    var root=d.getElementById('prgrulecontent'+pid),rules=Array.prototype.slice.call(root.children).filter(function(e){return /^rule\d+$/.test(e.id);});
    x.responseText.split('\n').slice(1).forEach(function(line){
     var tab=line.indexOf('\t');if(tab<0){return;}var key=line.slice(0,tab).split('|'),text=decodeURIComponent(line.slice(tab+1).trim()),r=rules[Number(key[1])];if(!r||!text){return;}
     if(key[0]==='r'){note(r,text,'Infotext zum Zweig',true);}
     else{var items=r.querySelectorAll(key[0]==='c'?'span[id^="sico"]':'span[id^="side"]'),item=items[Number(key[2])];if(!item){throw new Error('Zuordnung');}note(item.parentNode,text,key[0]==='c'?'Infotext zur Bedingung':'Infotext zur Aktivität');}
    });
   }catch(e){failed=true;}pending--;status();
  };x.onerror=/* Einen Ladefehler beim Abruf der Infotexte behandeln. */ function(){failed=true;pending--;status();};x.send('op=desc_get&pid='+encodeURIComponent(pid)+'&sid='+encodeURIComponent(w.SessId));
 }
 var originalRule=w.PrintLoadRuleCallback,originalPrograms=w.ProcessPrograms;
 w.PrintLoadRuleCallback=/* Die native Druckaufbereitung um Infotexte ergänzen. */ function(t){
  diagnostics.rules++;
  originalRule(t);var m=/^true\|(\d+)\|/.exec(t.responseText||'');if(m){fetchNotes(m[1]);pending--;status();}
 };
 w.ProcessPrograms=/* Die Verarbeitung der zu druckenden Programme starten. */ function(text){
  diagnostics.batches++;
  var count=text.split('|').filter(function(s){return /^\d+\n/.test(s);}).length;pending+=count;
  originalPrograms(text);loaded=true;status();
 };
 w.addEventListener('DOMContentLoaded',function(){
  var match=/[?&]sid=([^&]+)/.exec(w.location.search);w.SessId=match?decodeURIComponent(match[1]):'';
  if(!w.SessId||typeof w.GetAllPrograms!=='function'){failed=true;status();return;}
  w.loadTextResource();w.GetAllPrograms();
  w.setTimeout(function(){if(!loaded||pending!==0){failed=true;status();}},90000);
 });
})(window);
