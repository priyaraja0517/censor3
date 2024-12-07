var censoredword=["sad,"bad","mad"];
var customcensoredword=[];
function censor(inStr)
{
    for(idx in censoredword)
    {
        inStr=inStr.replace(censoredword(idx),"****");
    }
    for(idx in customcensoredword)
    {
        inStr=inStr.replace(customcensoredword(idx),"****")
    }
    return inStr;
}
function addcensoredword(word)
{
   customcensoredword.push(word);
}
function getcensoredword(word)
{
    return censoredword.concat(customcensoredword);
}
exports.censor=censor;
exports.addcensoredword=addcensoredword;
exports.getcensoredword=getcensoredword;