app={

 dataTypes:function(a)
{
  if (typeof(a)=="string")
  {
    return a.length;
  }
  else if (typeof(a)=="undefined"||(typeof(a) =="object" &&a===null))
  {
    return "no value";
  }
  else if (typeof(a)=="boolean")
  {
    return a;
  }
  else if (typeof(a)=="number")
  {
    if(a>100)
    {
      return "more than 100";
    }
    else if(a==100)
    {
      return "equal to 100";
    }
    else
    {
      return "less than 100";
    }
  }
  else if (typeof(a)=="object")
  {
    if(a instanceof Array)
    {
      if(a.length>=2) 
      {return a[2];}
      else
      {
        return undefined;
      }
    }
  }
  else if (typeof(a)=="function")
  {
    return a(true);
  }
  
  
}

}

module.exports=app;