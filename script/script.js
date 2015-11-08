textOutput = "";
mode = "json";

$ = function(id)
{
  return document.getElementById(id);
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

runScript = function()
{
  var req = xhr.create();
  req.open("POST", "exec.cgi", false);
  req.send($("input").value);
  
  textOutput = req.responseText;
  updateView();
}

showCachedPages = function()
{
  var req = xhr.create();
  req.open("POST", "exec.cgi", false);
  req.send("WriteLine(system.CacheInfo());");
  
  textOutput = req.responseText;
  updateView();
}

clearCache = function()
{
	var req = xhr.create();
  req.open("POST", "exec.cgi", false);
  req.send("WriteLine(system.ClearCache());\nWriteLine(system.CacheInfo());");
  
  textOutput = req.responseText;
  updateView();
}

disableCache = function()
{
  var req = xhr.create();
  req.open("POST", "exec.cgi", false);
  req.send("WriteLine(system.CacheMode(0));");
  
  textOutput = req.responseText;
  updateView();
}

enableCache = function()
{
  var req = xhr.create();
  req.open("POST", "exec.cgi", false);
  req.send("WriteLine(system.CacheMode(1));");
  
  textOutput = req.responseText;
  updateView();
}

updateView = function()
{
  if (mode == "stdout")
  {
    $("output").value = getStdout(textOutput);
  }
  else
  {
    $("output").value = textOutput;
  }
};

getVariables = function()
{
  var req = xhr.create();
  req.open("POST", "exec.cgi", false);
  req.send('string s_sysVarID;\nobject o_sysVar;\nstring s_nameSysVar = "";\nforeach (s_sysVarID, dom.GetObject(ID_SYSTEM_VARIABLES).EnumUsedIDs()) {\no_sysVar = dom.GetObject(s_sysVarID);\nWriteLine(o_sysVar.ID() # "\t" # o_sysVar.Name() # "\t" # o_sysVar.State());\n}');
  
  textOutput = req.responseText;
  updateView();
};

getPrograms = function()
{
  var req = xhr.create();
  req.open("POST", "exec.cgi", false);
  req.send('string s_sysVarID;\nobject o_sysVar;\nstring s_nameSysVar = "";\nforeach (s_sysVarID, dom.GetObject(ID_PROGRAMS).EnumUsedIDs()) {\no_sysVar = dom.GetObject(s_sysVarID);\nWriteLine(o_sysVar.ID() # "\t" # o_sysVar.Name());\n}');
  
  textOutput = req.responseText;
  updateView();
};

getDevicesChannelsDPs = function()
{
  var req = xhr.create();
  req.open("POST", "exec.cgi", false);
  req.send('string s_device; object o_device; integer i_devices = 0;  string s_channel; object o_channel; integer i_channels = 0;  string s_dp; object o_dp; integer i_dps = 0;  string s_typelist = "";  string s_temp;  foreach(s_device, dom.GetObject(ID_DEVICES).EnumUsedIDs()) {   var o_device = dom.GetObject(s_device);   if ((o_device.Address() != "BidCoS-Wir") && (o_device.Address() != "BidCoS-RF")) {     i_devices = i_devices + 1;     s_temp = i_devices.ToString();     if (i_devices < 10) { s_temp = " " # s_temp; }     if (i_devices < 100) { s_temp = " " # s_temp; }     WriteLine (s_temp # " " # o_device.Address () # " " # o_device.HssType () # " (" # o_device.Name() # ")");     s_typelist = s_typelist # o_device.HssType () # "\t";     i_channels = 0;     foreach(s_channel, o_device.Channels().EnumUsedIDs()) {       i_channels = i_channels + 1;       o_channel = dom.GetObject(s_channel);       s_temp = "               :" # o_channel.Address().StrValueByIndex(":",1);       WriteLine(s_temp # " " # o_channel.Name());       if (i_channels < 100) { s_temp = "                   "; }       if (i_channels < 10) { s_temp = "                  "; }       foreach(s_dp, o_channel.DPs().EnumUsedIDs()) {         i_dps = i_dps + 1;         o_dp = dom.GetObject(s_dp);         WriteLine(s_temp # o_dp.Name() );       }     }   } }  WriteLine("--------------------------------------------");  WriteLine(i_channels # " Kan�le in " # i_devices # " Ger�ten:");  string s_typeidx; string s_typeidx2; string s_typechecked = ""; integer i_subcount; foreach (s_typeidx, s_typelist) {   if (s_typechecked.Find(s_typeidx) == -1) {   i_subcount = 0;   foreach (s_typeidx2, s_typelist) {     if (s_typeidx2 == s_typeidx) {        i_subcount = i_subcount + 1; }     }     if (s_typechecked == "") {        s_typechecked = i_subcount # "x " # s_typeidx;      } else {        s_typechecked = s_typechecked # ", " # i_subcount # "x " # s_typeidx;      }   } }  WriteLine (s_typechecked);  WriteLine("--------------------------------------------");');
  
  textOutput = req.responseText;
  updateView();
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

showJson = function()
{
  mode = "json";
  updateView();
};

showStdout = function()
{
  mode = "stdout";
  updateView();
};

startup = function()
{
  textOutput = "";
  mode = "json";
  $("input").value = "WriteLine(\"Hallo Welt\");";
  $("output").value = "";
};

window.onload = startup;