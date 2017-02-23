var SessId;

// Übersicht der direkten Verknüpfungen drucken
function PrintAllDV()
{
	var printWin = window.open('','printWindow','toolbar=yes, menubar=yes, scrollbars=yes, resizable=yes,location=yes, directories=yes, status=yes');
	
	var content = "";
	if (document.getElementById("ic_linkpeerlist") != null)
		content = document.getElementById("ic_linkpeerlist").outerHTML;
	else if (document.getElementById("ProgramTable") != null)
		content = document.getElementById("ProgramTable").outerHTML;
	
	if (printWin.document.getElementById("printDiv") == null)
		printWin.document.write('<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" /><link rel="stylesheet" type="text/css" href="/addons/print/druckansicht.css" /></he' + 'ad><body><br><div class="FooterButton" onclick="javascript: window.stop(); window.print();" style="padding-left: 20px; margin-left: 10px; width: 90px;">DRUCKEN</di' + 'v><div id="printDiv">' + content + '</di' + 'v><br><div class="FooterButton" onclick="javascript: window.stop(); window.print();" style="padding-left: 20px; margin-left: 10px; width: 90px;">DRUCKEN</di' + 'v></bo' + 'dy></ht' + 'ml>');
	else
		printWin.document.getElementById("printDiv").outerHTML = content;
		
	ClearPage(printWin.document, "ProgramTable");
}

// Druckt Geräte Paramater
function PrintDevPara()
{
	var printWin = window.open('','printWindow','toolbar=yes, menubar=yes, scrollbars=yes, resizable=yes,location=yes, directories=yes, status=yes');
	
	var content = "";
	if (document.getElementById("ic_deviceparameters") != null)
		content = document.getElementById("ic_deviceparameters").outerHTML;
	else if (document.getElementById("ProgramTable") != null)
		content = document.getElementById("ProgramTable").outerHTML;
	
	if (printWin.document.getElementById("printDiv") == null)
		printWin.document.write('<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" /><link rel="stylesheet" type="text/css" href="/addons/print/druckansicht.css" /></he' + 'ad><body><br><div class="FooterButton" onclick="javascript: window.stop(); window.print();" style="padding-left: 20px; margin-left: 10px; width: 90px;">DRUCKEN</di' + 'v><div id="printDiv">' + content + '</di' + 'v><br><div class="FooterButton" onclick="javascript: window.stop(); window.print();" style="padding-left: 20px; margin-left: 10px; width: 90px;">DRUCKEN</di' + 'v></bo' + 'dy></ht' + 'ml>');
	else
		printWin.document.getElementById("printDiv").outerHTML = content;
		
	ClearPage(printWin.document, "ProgramTable");
}

// Einzelne direkte Verknüpfung drucken
function PrintPage()
{
	var printWin = window.open('','printWindow','toolbar=yes, menubar=yes, scrollbars=yes, resizable=yes,location=yes, directories=yes, status=yes');
	
	var content = "";
	if (document.getElementById("ic_setprofiles") != null)
		content = document.getElementById("ic_setprofiles").outerHTML;
	else if (document.getElementById("ProgramTable") != null)
		content = document.getElementById("ProgramTable").outerHTML;
	
	if (printWin.document.getElementById("printDiv") == null)
		printWin.document.write('<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" /><link rel="stylesheet" type="text/css" href="/addons/print/druckansicht.css" /></he' + 'ad><body><br><div class="FooterButton" onclick="javascript: window.stop(); window.print();" style="padding-left: 20px; margin-left: 10px; width: 90px;">DRUCKEN</di' + 'v><div id="printDiv">' + content + '</di' + 'v><br><div class="FooterButton" onclick="javascript: window.stop(); window.print();" style="padding-left: 20px; margin-left: 10px; width: 90px;">DRUCKEN</di' + 'v></bo' + 'dy></ht' + 'ml>');
	else
		printWin.document.getElementById("printDiv").outerHTML = content;
		
	ClearPage(printWin.document, "ProgramTable");
}

// Druckt alle Programme inkl. Systeminterne / EnumIDs
var printProgramsWin;
function PrintAllSysPrograms()
{
	printProgramsWin = window.open('','printProgramsWindow','toolbar=yes, menubar=yes, scrollbars=yes, resizable=yes,location=yes, directories=yes, status=yes');
	if (printProgramsWin.document.getElementById("printDiv") == null)
		printProgramsWin.document.write('<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" /><link rel="stylesheet" type="text/css" href="/addons/print/druckansicht.css" /><script type="text/javascript" src="/webui/js/extern/jquery.js"></script><script type="text/javascript" src="/webui/js/extern/jqueryURLPlugin.js"></script><script type="text/javascript" src="/webui/js/extern/prototype.js"></script><script type="text/javascript" src="/webui/js/lang/loadTextResource.js"></script><script type="text/javascript" src="/webui/js/lang/translate.js"></script><script type="text/javascript" src="/addons/print/functions.js"></script></he' + 'ad><body><br><div class="FooterButton" onclick="javascript: window.stop(' + '); window.print(' + ');" style="padding-left: 20px; margin-left: 10px; width: 90px;">DRUCKEN</di' + 'v><div id="header" lang="' + jQuery('#header').attr('lang') + '" style="height: 0px;"></d' + 'iv><div id="printDiv"></di' + 'v><br><div class="FooterButton" onclick="javascript: window.stop(' + '); window.print(' + ');" style="padding-left: 20px; margin-left: 10px; width: 90px;">DRUCKEN</di' + 'v><script>SessId = "' + SessionId + '"; loadTextResource(); GetAllSysPrograms();</script></bo' + 'dy></ht' + 'ml>');
}  

// Druckt alle Programme ohne Systeminterne / EnumUsedIDs
var printProgramsWin;
function PrintAllPrograms()
{
	//console.log('los gehts');
	printProgramsWin = window.open('','printProgramsWindow','toolbar=yes, menubar=yes, scrollbars=yes, resizable=yes,location=yes, directories=yes, status=yes');
	if (printProgramsWin.document.getElementById("printDiv") == null)
		printProgramsWin.document.write('<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" /><link rel="stylesheet" type="text/css" href="/addons/print/druckansicht.css" /><script type="text/javascript" src="/webui/js/extern/jquery.js"></script><script type="text/javascript" src="/webui/js/extern/jqueryURLPlugin.js"></script><script type="text/javascript" src="/webui/js/extern/prototype.js"></script><script type="text/javascript" src="/webui/js/lang/loadTextResource.js"></script><script type="text/javascript" src="/webui/js/lang/translate.js"></script><script type="text/javascript" src="/addons/print/functions.js"></script></he' + 'ad><body><br><div class="FooterButton" onclick="javascript: window.stop(' + '); window.print(' + ');" style="padding-left: 20px; margin-left: 10px; width: 90px;">DRUCKEN</di' + 'v><div id="header" lang="' + jQuery('#header').attr('lang') + '" style="height: 0px;"></d' + 'iv><div id="printDiv"></di' + 'v><br><div class="FooterButton" onclick="javascript: window.stop(' + '); window.print(' + ');" style="padding-left: 20px; margin-left: 10px; width: 90px;">DRUCKEN</di' + 'v><script>SessId = "' + SessionId + '"; loadTextResource(); GetAllPrograms();</script></bo' + 'dy></ht' + 'ml>');
	//console.log('fertich');
	//GetAllPrograms();
}

function ProcessPrograms(response)
{
  var programs = response.split("|");
  //console.log(programs);
  
  for (var i = 0; i < programs.length; i++)
  {
  	if (programs[i] != "")
  	{
  		var parray = programs[i].split("\n");
  		var pid = parray[0];
  		var rid = parray[4];
  		//console.log("-0:" + pid + "-1:" + parray[1] + "-2:" + parray[2] + "-3:" + parray[3] + "-4:" + parray[4] + "-");
		  document.getElementById("printDiv").innerHTML += "<div id=\"prgcontent" + pid + "\" style=\"page-break-before:always\">";
  		
		  var p  = "<table id=\"ProgramTable" + pid + "\" class=\"filterTable tTable\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"j_translate\">";
		      p += "  <thead>";
		      p += "    <tr>";
		      p += "      <td class=\"thCell CLASS04802\" >${thName}</td>";
		      p += "      <td class=\"thCell CLASS04802\" >${thDescription}</td>";
		      p += "      <td class=\"thCell CLASS04802\" >${thProgramCondition}</td>";
		      p += "      <td class=\"thCell CLASS04802\" >${thProgramActivity}</td>";
		      p += "      <td class=\"thCell CLASS04802\" >${thAction}</td>";
		      p += "    </tr>";
		      p += "  </thead>";
		      p += "  <tbody>";
		      p += "    <tr class=\"CLASS04803\">";
		      p += "      <td class=\"tBodyCell bgWhite taCenter\" id=\"prg" + pid + "name\">" + parray[1] + "</td>";
		      p += "      <td class=\"tBodyCell bgWhite taCenter\" id=\"prg" + pid + "desc\" colspan=\"3\">" + parray[2] + "</td>";
		      p += "      <td class=\"tBodyCell bgWhite\"><input type=\"checkbox\" id=\"p" + pid + "_systeminternal\" " + (parray[3] ? "true" : "false") + "\" /><label for=\"p" + pid + "_systeminternal\">system intern</label></td>";
		      p += "    </tr>";
		      p += "    <tr>";
		      p += "      <td colspan=\"5\">";
		      p += "        <div id=\"prgrulecontent" + pid + "\">";
		      p += "        </div>";
		      p += "      </td>";
		      p += "    </tr>";
		      p += "  </tbody>";
		      p += "</table>";

			document.getElementById("printDiv").innerHTML += p;
			document.getElementById("printDiv").innerHTML += "</div>";
      
      //console.log("print: " + programs[i]);
      PrintProgram(pid, rid);
	  }
  }
}

ClearPage = function(doc, translateElement)
{
	if (!doc) alert("Fehler! doc ex. nicht");
	//alert("doc.childNodes.length: " + doc.childNodes.length);
	for (var cn = 0; cn < doc.childNodes.length; cn++)
	{
		if (doc.childNodes[cn].tagName)
		{
  		//alert("doc.childNodes[cn].tagName.toLowerCase(): " + doc.childNodes[cn].tagName.toLowerCase());
  		if (doc.childNodes[cn].tagName.toLowerCase() == "select")
  			doc.childNodes[cn].outerHTML = "<b><u>" + doc.childNodes[cn].options[doc.childNodes[cn].selectedIndex].text + "</u><b>";
  		else if (doc.childNodes[cn].tagName.toLowerCase() == "input" && doc.childNodes[cn].type.toLowerCase() == "text")
  			doc.childNodes[cn].outerHTML = "<b><u>" + doc.childNodes[cn].value + "</u></b>";
  		else if (doc.childNodes[cn].tagName.toLowerCase() == "img")
  			doc.childNodes[cn].outerHTML = "";
  	}

		//alert("doc.childNodes[cn].hasChildNodes(): " + doc.childNodes[cn].hasChildNodes());
		if (doc.childNodes[cn].hasChildNodes())
			changeNode(doc.childNodes[cn]);
	}
	
	/*console.log('translate ' + '#' + translateElement);
	console.log(jQuery('#' + translateElement).html());*/
	translatePage("#" + translateElement);
};

changeNode = function(node)
{
	for (var y = 0; y < node.childNodes.length; y++)
	{
		if (node.childNodes[y].tagName)
		{
			//alert("tagName: " + node.childNodes[y].tagName.toLowerCase() + "\nid: " + node.childNodes[y].id + "\nclassName: " + node.childNodes[y].className.toLowerCase());
  		if (node.childNodes[y].tagName.toLowerCase() == "select")
  		{
  			if (node.childNodes[y].onchange && node.childNodes[y].onchange.toString().indexOf("iseSingleCondition.OperatorType") > -1)
  				node.removeChild(node.childNodes[y]);
  			else
  			{
  				//alert("options.length: " + node.childNodes[y].options.length + "\nselectedIndex: " + node.childNodes[y].selectedIndex);
  				node.childNodes[y].outerHTML = "<b><u>" + node.childNodes[y].options[node.childNodes[y].selectedIndex].text + "</u><b>";
  			}
  		}
  		else if (node.childNodes[y].tagName.toLowerCase() == "input" && node.childNodes[y].type.toLowerCase() == "text")
  			node.childNodes[y].outerHTML = "<b><u>" + node.childNodes[y].value + "</u></b>";
  		else if (node.childNodes[y].tagName.toLowerCase() == "img")
  			node.removeChild(node.childNodes[y]);
  		else if (node.childNodes[y].className.toLowerCase() == "setproflinktbl_buttons")
  			node.removeChild(node.childNodes[y]);
  		else if (node.childNodes[y].className.toLowerCase() == "class20009")
  			node.removeChild(node.childNodes[y]);
  		else if (node.childNodes[y].tagName.toLowerCase() == "span" && (!node.childNodes[y].id || node.childNodes[y].id == "") && node.childNodes[y].innerHTML == "<b><u>UND</u><b></b></b>")
  			node.childNodes[y].innerHTML = "";
  		else if (node.childNodes[y].tagName.toLowerCase() == "b")
			{
			  var e = node.childNodes[y];
				if (e.onclick != null)
				{
					var fname = e.onclick.toString();
					if ( fname.indexOf("EditScript") > -1)
					{
						var teilstring = fname.substring(fname.indexOf("EditScript") + 11);
						var ssid = teilstring.substring(0, teilstring.indexOf(")"));
						var req = xhr.create();
		  			req.open("POST", "/addons/print/exec1.cgi", false);
		  			var sreq = 'object oTmp = dom.GetObject( "' + ssid + '" ); if( oTmp ) { if( oTmp.DestinationValueType() == ivtString ) { Write( oTmp.DestinationValue().ToString() ); } }';
		  			//alert(sreq);
		  			req.send(sreq);
		  			textOutput = req.responseText;
		  			
						e.outerHTML = '<br /><pre>' + getStdout(textOutput).replace(/\n\r?/g, '<br />') + '</pre><br />';
					}
					else if ( fname.indexOf("ShowTimeEditor") > -1)
					{
						fname = fname.substring(fname.indexOf("ShowTimeEditor") + 11);
						var teilstring = fname.substring(fname.indexOf(",") + 1).replace(" ", "");
						var ssid = teilstring.substring(0, teilstring.indexOf(")"));
						var req = xhr.create();
		  			req.open("POST", "/addons/print/exec.cgi", false);
		  			var sreq = "";
		  			if (window.DOMParser)
		  				sreq = 'object tmObj = dom.GetObject("' + ssid + '"); Write("<?xml version=\\"1.0\\"?><!DOCTYPE tm [<!ENTITY amp \\"&#38;\\">]" # "><tm><zeile1>"); if (tmObj && (tmObj.Type() == OT_CALENDARDP)) {   if (tmObj.SunOffsetType() == sotNone) {     if ( (tmObj.CalDuration() == 0) && (tmObj.Time() == 0) ) {       Write("<info>Zeitbereich ganzt&amp;auml;gig</info>");     }     else {       if (tmObj.CalDuration() != 0) {         Write("<info>Zeitbereich von </info>");         Write("<convertDomTime>" # tmObj.Time() # "</convertDomTime>");         Write("<info> bis </info><calcEndTime>" # tmObj.Time() # ", " # tmObj.CalDuration() # "</calcEndTime>");       }       else {         Write("<info>Zeitpunkt: </info>");         Write("<convertDomTime>" # tmObj.Time() # "</convertDomTime>");       }     }   }   else {     if (tmObj.SunOffsetType() == sotAfterSunrise) {       Write("<info>Zeitbereich Astrofunktion tags&amp;uuml;ber</info>");     }     if (tmObj.SunOffsetType() == sotAfterSunset) {       Write("<info>Zeitbereich Astrofunktion nachts</info>");     }   }    string sCalRep = tmObj.CalRepeatTime();     integer iPeriod = tmObj.Period();   integer iRepVal = tmObj.CalRepetitionValue();   integer iWdays = tmObj.Weekdays();   integer iType = tmObj.TimerType(); Write("</zeile1><zeile2>"); if (iType == ttCalOnce) {     Write("<info>einmalig am: ");     Write("<convertDomDate>" # sCalRep # "</convertDomDate>");     }   if (iType == ttPeriodic) {     Write("<info>Zeitintervall, alle ");     integer iSelIdx = 0;     string sVal = "";     sVal = iPeriod;     if ( (iPeriod / (3600)) > 0)      {       if( (iPeriod % 3600) == 0 )       {         sVal = iPeriod / (3600);         iSelIdx = 0;       }       else       {         if( (iPeriod % 60) == 0 )         {           sVal = iPeriod / (60);           iSelIdx = 1;         }         else         {           sVal = iPeriod;           iSelIdx = 2;         }       }     }     else      {       if ( (iPeriod / 60) > 0)        {         if( (iPeriod % 60) == 0 )         {           sVal = iPeriod / (60);           iSelIdx = 1;         }         else         {           sVal = iPeriod;           iSelIdx = 2;         }       }       else        {         sVal = iPeriod;         iSelIdx = 2;       }     }     if (iSelIdx == 0) {       Write(sVal # " Stunden"); }     if (iSelIdx == 1) {       Write(sVal # " Minuten"); }     if (iSelIdx == 2) {       Write(sVal # " Sekunden"); }   }   if (iType == ttCalDaily) {     Write("<info>t&amp;auml;glich, ");     if (iRepVal != 0) {       Write("alle " # iRepVal # " Tage");     }     if (iWdays != 0) {       if (iWdays == 96) { Write("am Wochenende (Sa., So.)"); }       else { Write("jeden Tag, außer am Wochenende (Mo. bis Fr.)"); }     }     if ((iRepVal == 0) && (iWdays == 0)) {       Write("jeden Tag");     }   }   if (iType == ttCalWeekly) {     Write("<info>w&amp;ouml;chentlich, ");     if (iRepVal != 0) {       Write("alle " # iRepVal # " Wochen");     }     else {       Write("jede Woche am: ");     }     if ( (iWdays & 1) != 0) { Write("Montag "); }     if ( (iWdays & 2) != 0) { Write("Dienstag "); }     if ( (iWdays & 4) != 0) { Write("Mittwoch "); }     if ( (iWdays & 8) != 0) { Write("Donnerstag "); }     if ( (iWdays & 16) != 0) { Write("Freitag "); }     if ( (iWdays & 32) != 0) { Write("Samstag "); }     if ( (iWdays & 64) != 0) { Write("Sonntag"); }   }   if (iType == ttCalMonthly) {     Write("<info>monatlich, ");     if (iWdays == 0) {       Write("am " # iPeriod # ". Tag jedes " # iRepVal # ". Monats");     }     else {       Write("jeden ");       if (iPeriod == 1) { Write("ersten "); }       if (iPeriod == 2) { Write("zweiten "); }       if (iPeriod == 3) { Write("dritten "); }       if (iPeriod == 4) { Write("vierten "); }       if (iPeriod == 5) { Write("f&amp;uuml;nften "); }       if (iWdays == 1) { Write("Montag "); }       if (iWdays == 2) { Write("Dienstag "); }       if (iWdays == 4) { Write("Mittwoch "); }       if (iWdays == 8) { Write("Donnerstag "); }       if (iWdays == 16) { Write("Freitag "); }       if (iWdays == 32) { Write("Samstag "); } if (iWdays == 64) { Write("Sonntag "); }       Write("jedes " # iRepVal # ". Monats");     }   }   if (iType == ttCalYearly) {     Write("<info>j&amp;auml;hrlich, ");     if (iWdays == 0) {       Write("jeden " # iPeriod # ". ");       if (iRepVal == 1) { Write("Januar"); }       if (iRepVal == 2) { Write("Februar"); }       if (iRepVal == 3) { Write("M&amp;auml;rz"); }       if (iRepVal == 4) { Write("April"); }       if (iRepVal == 5) { Write("Mai"); }       if (iRepVal == 6) { Write("Juni"); }       if (iRepVal == 7) { Write("Juli"); }       if (iRepVal == 8) { Write("August"); }       if (iRepVal == 9) { Write("September"); }       if (iRepVal == 10) { Write("Oktober"); }       if (iRepVal == 11) { Write("November"); }       if (iRepVal == 12) { Write("Dezember"); }     }     else {       Write("am ");       if (iPeriod == 1) { Write("ersten "); }       if (iPeriod == 2) { Write("zweiten "); }       if (iPeriod == 3) { Write("dritten "); }       if (iPeriod == 4) { Write("vierten "); }       if (iPeriod == 5) { Write("f&amp;uuml;nften "); }       if (iWdays == 1) { Write("Montag "); }       if (iWdays == 2) { Write("Dienstag "); }       if (iWdays == 4) { Write("Mittwoch "); }       if (iWdays == 8) { Write("Donnerstag "); }       if (iWdays == 16) { Write("Freitag "); }       if (iWdays == 32) { Write("Samstag "); }       if (iWdays == 64) { Write("Sonntag "); }       Write("im ");       if (iRepVal == 1) { Write("Januar"); }       if (iRepVal == 2) { Write("Februar"); }       if (iRepVal == 3) { Write("M&amp;auml;rz"); }       if (iRepVal == 4) { Write("April"); }       if (iRepVal == 5) { Write("Mai"); }       if (iRepVal == 6) { Write("Juni"); }       if (iRepVal == 7) { Write("Juli"); }       if (iRepVal == 8) { Write("August"); }       if (iRepVal == 9) { Write("September"); }       if (iRepVal == 10) { Write("Oktober"); }       if (iRepVal == 11) { Write("November"); }       if (iRepVal == 12) { Write("Dezember"); }     }   }      Write("</info>");   Write("</zeile2><zeile3>");   string sBegin = tmObj.Begin();   string sEnd = tmObj.End();   integer iCalCount = tmObj.CalRepetitionCount();   Write("<info>Beginn: </info><convertDomDate>" # sBegin # "</convertDomDate>");   if ( (iCalCount == 0) && (tmObj.EndSeconds() == 0) )    {     Write("<info>, kein Enddatum</info>");   }   else    {     if (iCalCount == 0)      {       Write("<info>, endet am: </info><convertDomDate>" # sEnd # "</convertDomDate>");     }     else      {       Write("<info>, endet nach " # iCalCount # " Terminen</info>");     }   }   Write("</zeile3></tm>"); }';
		  			else
		  				sreq = 'object tmObj = dom.GetObject("' + ssid + '"); Write("<tm><zeile1>"); if (tmObj && (tmObj.Type() == OT_CALENDARDP)) {   if (tmObj.SunOffsetType() == sotNone) {     if ( (tmObj.CalDuration() == 0) && (tmObj.Time() == 0) ) {       Write("<info>Zeitbereich ganzt&amp;auml;gig</info>");     }     else {       if (tmObj.CalDuration() != 0) {         Write("<info>Zeitbereich von </info>");         Write("<convertDomTime>" # tmObj.Time() # "</convertDomTime>");         Write("<info> bis </info><calcEndTime>" # tmObj.Time() # ", " # tmObj.CalDuration() # "</calcEndTime>");       }       else {         Write("<info>Zeitpunkt: </info>");         Write("<convertDomTime>" # tmObj.Time() # "</convertDomTime>");       }     }   }   else {     if (tmObj.SunOffsetType() == sotAfterSunrise) {       Write("<info>Zeitbereich Astrofunktion tags&amp;uuml;ber</info>");     }     if (tmObj.SunOffsetType() == sotAfterSunset) {       Write("<info>Zeitbereich Astrofunktion nachts</info>");     }   }    string sCalRep = tmObj.CalRepeatTime();     integer iPeriod = tmObj.Period();   integer iRepVal = tmObj.CalRepetitionValue();   integer iWdays = tmObj.Weekdays();   integer iType = tmObj.TimerType(); Write("</zeile1><zeile2>"); if (iType == ttCalOnce) {     Write("<info>einmalig am: ");     Write("<convertDomDate>" # sCalRep # "</convertDomDate>");     }   if (iType == ttPeriodic) {     Write("<info>Zeitintervall, alle ");     integer iSelIdx = 0;     string sVal = "";     sVal = iPeriod;     if ( (iPeriod / (3600)) > 0)      {       if( (iPeriod % 3600) == 0 )       {         sVal = iPeriod / (3600);         iSelIdx = 0;       }       else       {         if( (iPeriod % 60) == 0 )         {           sVal = iPeriod / (60);           iSelIdx = 1;         }         else         {           sVal = iPeriod;           iSelIdx = 2;         }       }     }     else      {       if ( (iPeriod / 60) > 0)        {         if( (iPeriod % 60) == 0 )         {           sVal = iPeriod / (60);           iSelIdx = 1;         }         else         {           sVal = iPeriod;           iSelIdx = 2;         }       }       else        {         sVal = iPeriod;         iSelIdx = 2;       }     }     if (iSelIdx == 0) {       Write(sVal # " Stunden"); }     if (iSelIdx == 1) {       Write(sVal # " Minuten"); }     if (iSelIdx == 2) {       Write(sVal # " Sekunden"); }   }   if (iType == ttCalDaily) {     Write("<info>t&amp;auml;glich, ");     if (iRepVal != 0) {       Write("alle " # iRepVal # " Tage");     }     if (iWdays != 0) {       if (iWdays == 96) { Write("am Wochenende (Sa., So.)"); }       else { Write("jeden Tag, außer am Wochenende (Mo. bis Fr.)"); }     }     if ((iRepVal == 0) && (iWdays == 0)) {       Write("jeden Tag");     }   }   if (iType == ttCalWeekly) {     Write("<info>w&amp;ouml;chentlich, ");     if (iRepVal != 0) {       Write("alle " # iRepVal # " Wochen");     }     else {       Write("jede Woche am: ");     }     if ( (iWdays & 1) != 0) { Write("Montag "); }     if ( (iWdays & 2) != 0) { Write("Dienstag "); }     if ( (iWdays & 4) != 0) { Write("Mittwoch "); }     if ( (iWdays & 8) != 0) { Write("Donnerstag "); }     if ( (iWdays & 16) != 0) { Write("Freitag "); }     if ( (iWdays & 32) != 0) { Write("Samstag "); }     if ( (iWdays & 64) != 0) { Write("Sonntag"); }   }   if (iType == ttCalMonthly) {     Write("<info>monatlich, ");     if (iWdays == 0) {       Write("am " # iPeriod # ". Tag jedes " # iRepVal # ". Monats");     }     else {       Write("jeden ");       if (iPeriod == 1) { Write("ersten "); }       if (iPeriod == 2) { Write("zweiten "); }       if (iPeriod == 3) { Write("dritten "); }       if (iPeriod == 4) { Write("vierten "); }       if (iPeriod == 5) { Write("f&amp;uuml;nften "); }       if (iWdays == 1) { Write("Montag "); }       if (iWdays == 2) { Write("Dienstag "); }       if (iWdays == 4) { Write("Mittwoch "); }       if (iWdays == 8) { Write("Donnerstag "); }       if (iWdays == 16) { Write("Freitag "); }       if (iWdays == 32) { Write("Samstag "); } if (iWdays == 64) { Write("Sonntag "); } Write("jedes " # iRepVal # ". Monats");     }   }   if (iType == ttCalYearly) {     Write("<info>j&amp;auml;hrlich, ");     if (iWdays == 0) {       Write("jeden " # iPeriod # ". ");       if (iRepVal == 1) { Write("Januar"); }       if (iRepVal == 2) { Write("Februar"); }       if (iRepVal == 3) { Write("M&amp;auml;rz"); }       if (iRepVal == 4) { Write("April"); }       if (iRepVal == 5) { Write("Mai"); }       if (iRepVal == 6) { Write("Juni"); }       if (iRepVal == 7) { Write("Juli"); }       if (iRepVal == 8) { Write("August"); }       if (iRepVal == 9) { Write("September"); }       if (iRepVal == 10) { Write("Oktober"); }       if (iRepVal == 11) { Write("November"); }       if (iRepVal == 12) { Write("Dezember"); }     }     else {       Write("am ");       if (iPeriod == 1) { Write("ersten "); }       if (iPeriod == 2) { Write("zweiten "); }       if (iPeriod == 3) { Write("dritten "); }       if (iPeriod == 4) { Write("vierten "); }       if (iPeriod == 5) { Write("f&amp;uuml;nften "); }       if (iWdays == 1) { Write("Montag "); }       if (iWdays == 2) { Write("Dienstag "); }       if (iWdays == 4) { Write("Mittwoch "); }       if (iWdays == 8) { Write("Donnerstag "); }       if (iWdays == 16) { Write("Freitag "); }       if (iWdays == 32) { Write("Samstag "); }       if (iWdays == 64) { Write("Sonntag "); }       Write("im ");       if (iRepVal == 1) { Write("Januar"); }       if (iRepVal == 2) { Write("Februar"); }       if (iRepVal == 3) { Write("M&amp;auml;rz"); }       if (iRepVal == 4) { Write("April"); }       if (iRepVal == 5) { Write("Mai"); }       if (iRepVal == 6) { Write("Juni"); }       if (iRepVal == 7) { Write("Juli"); }       if (iRepVal == 8) { Write("August"); }       if (iRepVal == 9) { Write("September"); }       if (iRepVal == 10) { Write("Oktober"); }       if (iRepVal == 11) { Write("November"); }       if (iRepVal == 12) { Write("Dezember"); }     }   }      Write("</info>");   Write("</zeile2><zeile3>");   string sBegin = tmObj.Begin();   string sEnd = tmObj.End();   integer iCalCount = tmObj.CalRepetitionCount();   Write("<info>Beginn: </info><convertDomDate>" # sBegin # "</convertDomDate>");   if ( (iCalCount == 0) && (tmObj.EndSeconds() == 0) )    {     Write("<info>, kein Enddatum</info>");   }   else    {     if (iCalCount == 0)      {       Write("<info>, endet am: </info><convertDomDate>" # sEnd # "</convertDomDate>");     }     else      {       Write("<info>, endet nach " # iCalCount # " Terminen</info>");     }   }   Write("</zeile3></tm>"); }';
		  			//alert(sreq);
		  			req.send(sreq);
		  			textOutput = req.responseText;
		  			
		  			ausgabe = "";
		  			parseTimeModule(getStdout(textOutput));
		  			//alert(ausgabe);
						e.outerHTML = '<br /><pre>' + ausgabe + '</pre><br />';
					}
				}
			}

			if (node.childNodes[y] != null && node.childNodes[y].hasChildNodes())
				changeNode(node.childNodes[y]);
		}
	}
};

var xml;
var ausgabe = "";
parseTimeModule = function(tm)
{
	if (window.DOMParser)
	{
	  var parser = new DOMParser();
	  xml = parser.parseFromString(tm, "text/xml");
		startParsing();
	}
	else // Internet Explorer
	{
	  xml = new ActiveXObject("Microsoft.XMLDOM");
	  xml.async = false;
	  xml.onreadystatechange = parseXML;
	  xml.loadXML(tm);
	  
	  //alert("xml:\n" + tm);
    var errorMsg = null;
    if (xml.parseError && xml.parseError.errorCode != 0) {
        errorMsg = "XML Parsing Error: " + xml.parseError.reason
                  + " at line " + xml.parseError.line
                  + " at position " + xml.parseError.linepos;
      alert("Fehler: " + errorMsg);
    }
	}
};

parseXML = function()
{
  if (xml.readyState == 4)
  {
	 	startParsing();
  }
};

startParsing = function()
{		
	//alert("childNodes length: " + xml.childNodes.length + "\nhasChildNodes: " + xml.hasChildNodes())
	if (xml.hasChildNodes())
	{
  	for (var y = 0; y < xml.childNodes.length; y++)
  	{
  		ausgabe = parseXMLNodeTM(xml.childNodes[y], ausgabe);
		}
	}
	//alert("ausgabe: " + ausgabe);
};

parseXMLNodeTM = function(wert, ausgabe)
{
	if (typeof(wert) != "undefined")
	{
		if (!window.DOMParser)
		{
			if (wert.tagName)
			{
				//alert("IE:\ntagName: " + wert.tagName.toLowerCase() + "\ntext: " + wert.text);
				if (wert.tagName.toLowerCase() == "zeile1")
					ausgabe += "    <b><u>Zeit:</u></b> ";
				else if (wert.tagName.toLowerCase() == "zeile2")
					ausgabe += "<br>    <b><u>Serienmuster:</u></b> ";
				else if (wert.tagName.toLowerCase() == "zeile3")
					ausgabe += "<br>    <b><u>G&uuml;ltigkeitsdauer:</u></b> ";
				else if (wert.tagName.toLowerCase() == "info")
					ausgabe += wert.text;
				else if (wert.tagName.toLowerCase() == "convertdomdate")
					ausgabe += convertDomDate2(wert.text);
				else if (wert.tagName.toLowerCase() == "convertdomtime")
					ausgabe += convertDomTime2(wert.text) + " Uhr";
				else if (wert.tagName.toLowerCase() == "calcendtime") {
					//alert(wert.textContent.substr(0, wert.textContent.indexOf(",")) + "," + wert.textContent.substr(wert.textContent.indexOf(",") + 2));
					ausgabe += calcEndTime(wert.text.substr(0, wert.text.indexOf(",")), wert.text.substr(wert.text.indexOf(",") + 2)) + " Uhr";
				}
				else if (wert.tagName != "#text" && wert.tagName != "tm")
					alert(wert.tagName + ", textContent: " + wert.text);
			}
		}
		else
		{
			//alert("Firefox:\nnodeName: " + wert.nodeName.toLowerCase() + "\ntextContext: " + wert.textContent);
			if (wert.nodeName.toLowerCase() == "zeile1")
				ausgabe += "    <b><u>Zeit:</u></b> ";
			else if (wert.nodeName.toLowerCase() == "zeile2")
				ausgabe += "<br>    <b><u>Serienmuster:</u></b> ";
			else if (wert.nodeName.toLowerCase() == "zeile3")
				ausgabe += "<br>    <b><u>G&uuml;ltigkeitsdauer:</u></b> ";
			else if (wert.nodeName.toLowerCase() == "info")
				ausgabe += wert.textContent;
			else if (wert.nodeName.toLowerCase() == "convertdomdate")
				ausgabe += convertDomDate2(wert.textContent);
			else if (wert.nodeName.toLowerCase() == "convertdomtime")
				ausgabe += convertDomTime2(wert.textContent) + " Uhr";
			else if (wert.nodeName.toLowerCase() == "calcendtime") {
				//alert(wert.textContent.substr(0, wert.textContent.indexOf(",")) + "," + wert.textContent.substr(wert.textContent.indexOf(",") + 2));
				ausgabe += calcEndTime(wert.textContent.substr(0, wert.textContent.indexOf(",")), wert.textContent.substr(wert.textContent.indexOf(",") + 2)) + " Uhr";
			}
			else if (wert.nodeName != "#text" && wert.nodeName != "tm")
				alert(wert.nodeName + ", textContent: " + wert.textContent);
		}

		//alert("ausgabe: " + ausgabe);
		if (wert.hasChildNodes())
		{
	  	for (var y = 0; y < wert.childNodes.length; y++)
	  	{
				ausgabe = parseXMLNodeTM(wert.childNodes[y], ausgabe);
			}
		}
	}
	
	return ausgabe;
};

convertDomDate2 = function(s)
{
	if (!s) return "01.01.1900";
  var tmp = s;
  var arTmp = tmp.split(' ');
  arTmp = arTmp[0].split('-');
  return arTmp[2]+'.'+arTmp[1]+'.'+arTmp[0];
};

convertDomTime2 = function(s) {
  if (!s || s.length === 0) { return ""; }
  var tmp = s;
  var arTmp = tmp.split(' ');
  arTmp = arTmp[1].split(':');
  return arTmp[0]+':'+arTmp[1];
};

calcEndTime = function(domTime, secCount)
{
  var tmp = domTime;
  var arTmp = tmp.split(' ');
  arTmp = arTmp[1].split(':');
  var iSec1 = parseInt( arTmp[0], 10 ) * 3600;
  var iSec2 = parseInt( arTmp[1], 10 ) * 60;
  var secTotal = (iSec1 + iSec2 + parseInt(secCount, 10)) % 86400;
  var ifHours = Math.floor( secTotal / 3600 );
  var hours = parseInt( ifHours, 10 );
  if( hours < 10 )
  {
    hours = "0" + hours;
  }
  var ifMins = Math.floor( secTotal / 60 );
  var mins = parseInt( ifMins, 10 ) - parseInt( (hours * 60), 10 );
  if( mins < 10 )
  {
    mins = "0" + mins;
  }
	//alert("domTime: " + domTime + ", secCount: " + secCount + ", iSec1: " + iSec1 + ", iSec2: " + iSec2 + ", iSec1 + iSec2 + secCount: " + (iSec1 + iSec2 + parseInt(secCount, 10)) + "\nsecTotal: " + secTotal + ", ifHours: " + ifHours + ", hours: " + hours + ", ifMins: " + ifMins + ", mins: " + mins);
  return hours + ":" + mins;
};

getStdout = function()
{
  var result = "";
  try
  {
    var obj = eval("(" + textOutput + ")");
    return obj["STDOUT"];
  }
  catch (ex)
  {
    result = "INVALID JSON";
  }
  return result;
};

xhr = 
{
  create: function()
  {
    xhr.create = xhr._create();
    return xhr.create();
  },
  
  _create: function()
  {
    var fn = 
    [
      function() { return new XMLHttpRequest(); },
      function() { return new ActiveXObject("Microsoft.XMLHTTP"); },
      function() { return new ActiveXObject("Msxml2.XMLHTTP"); }
    ];
    
    for (var i = 0, len = fn.length; i < len; i ++)
    {
      try
      {
        fn[i]();
        return fn[i];
      }
      catch (ex) { }
    }
  
    throw new Error("XMLHttpRequest not supported");	  
  }
};

PrintProgram = function(pidAL, ridAL)
{
	//alert("LoadRule(P"+pidAL+"R"+ridAL+")");
  var url = "/esp/PrintProgram.htm?sid="+SessId;
  var pb = '';
  pb += 'string action = "LoadRule";';
  pb += 'string pid = "'+pidAL+'";';
  pb += 'string rid = "'+ridAL+'";';
  var opts = { postBody: pb, onComplete: PrintLoadRuleCallback }
  new Ajax.Request(url, opts);
};

PrintLoadRuleCallback = function(t)
{
	//alert(t.responseText);
  var res = t.responseText;
  var posSeparator = res.indexOf("|");
  if( posSeparator != -1 )
  {
    var sLastRule = res.substr(0, posSeparator);
    res = res.substr(posSeparator + 1);
    var id = "0";
    if( sLastRule == "false" )
    {
      posSeparator = res.indexOf("|");
      if( posSeparator != -1 )
      {
        var sNextRule = res.substr(0, posSeparator);
        res = res.substr(posSeparator + 1);
	      posSeparator = res.indexOf("|");
	      if( posSeparator != -1 )
	      {
	        id = res.substr(0, posSeparator);
	        res = res.substr(posSeparator + 1);
	      }
        PrintProgram(id, sNextRule);
      }
    }
    else
  	{
      posSeparator = res.indexOf("|");
      if( posSeparator != -1 )
      {
        id = res.substr(0, posSeparator);
        res = res.substr(posSeparator + 1);
      }
  	}
    document.getElementById("prgrulecontent" + id).innerHTML += res;
    if (sLastRule == "true")
    {
    	//alert("ClearPage: prgrulecontent" + id);
      ClearPage(document.getElementById("prgrulecontent" + id), "ProgramTable" + id);
    }
  }
}

GetAllPrograms = function(id)
{
  var url = "/esp/PrintProgram.htm?sid="+SessId;
  var pb = '';
  pb += 'string action = "GetAllPrograms";';
  pb += 'string tmpPrgIDAL = "'+id+'";';
  //console.log(url + ', ' + pb);
  var opts =
  {
    postBody: pb,
    onComplete: function(t)
    {
    	//console.log(t.responseText);
      ProcessPrograms(t.responseText);
    },
    onFailure: function(t) {
    	//console.log(t);
    }
  };
  new Ajax.Request(url, opts);
};


GetAllSysPrograms = function(id)
{
  var url = "/esp/PrintProgram.htm?sid="+SessId;
  var pb = '';
  pb += 'string action = "GetAllSysPrograms";';
  pb += 'string tmpPrgIDAL = "'+id+'";';
  //console.log(url + ', ' + pb);
  var opts =
  {
    postBody: pb,
    onComplete: function(t)
    {
    	//console.log(t.responseText);
      ProcessPrograms(t.responseText);
    },
    onFailure: function(t) {
    	//console.log(t);
    }
  };
  new Ajax.Request(url, opts);
};
