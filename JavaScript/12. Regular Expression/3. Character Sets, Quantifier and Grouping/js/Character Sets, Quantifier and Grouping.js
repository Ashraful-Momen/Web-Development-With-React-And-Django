//-------------------------1. MetaCharacter: '^hello' start with 'hello',---------------------------------------------
//------------------------- '$hello' end with , 
//-------------------------'h.llo' must be replace with any one character and blank not allow.
//-------------------------- 'h*llo' this pattern 'h('*** here will be anything****)llo'. And may be exit with any character('anything') on (*) or blank/null / nonexit any character here,
//---------------------------- 'ha?e?llo' here 'a'/'e' -> optional but can't be replace other character----------------------
//------------------------------if we want to pattern '?' then we have to use '\?' // and '\' also known as escape;

//------------------------------2. Character Set:  Bracket []----------------------------------------------------

let re = 'hello'; // CaseSetive

    re = /hello/i; // nonCaseSensetive

    re = /hell/i;
    re = /^hello/i; // must be start with "hello";
    re = /hello$/i; // must be end with "hello";
    re = /^hello$/i; // must be start+end with "hello";
    re = /h.llo/i; // match with 'h(any latter)llo' and blank is not allow;
    re = /h*llo/i; // match with 'h(any latter)llo' and blank is allow;
    re = /he?llo/i; // match with "h('e' latter)llo" but without 'e' other-latter is not allow ,  and blank/space is allow;
    re = /he\?llo/i; // match with "he('?' latter)llo" but without '?' other-latter is not allow ,  and blank/space is not allow;

    //-----------------------------character set : bracket []----------------------------------------------------

    re = /[e]llo/ //Must be matched with only one of  'e/s' inside the bracket (can't contain both at a time 'e/s') . blank not allow.
    re = /h[^ae]llo/; //must allow all char except "a/e" ; blank is not allow but space is allow ;
    re = /^h[ae]llo/; // must start with  "a/e" ; blank/space  is not allow ;
    re = /^[ae]llo/; // must start with  "a/e" ; blank/space  is not allow ;
    re = /^[a-z]llo/; // must start with  "a-z" ; blank/space  is not allow ;
    re = /^[A-Z]llo/; // must start with  "A-Z" ; blank/space  is not allow ;
    re = /^[A-Z]/; // must start with Capital  "A-Z"  latter ; blank/space  is not allow ;
    re = /^[A-Z]/; // must start with lowerCase / smallLatter  "a-z" ; blank/space  is not allow ;
    re = /^[A-Za-z]/; // must start with UpperCase/lowerCase  "a-z or A-Z" ; blank/space  is not allow ;
    re = /^[A-Za-z]ello/; // must start with UpperCase/lowerCase  "a-z or A-Z" ; blank/space  is not allow ;
    re = /[0-9]ello/; // start with Digit  "0-9" ; blank/space  is not allow ;
    re = /^[0-9]ello/; // 1st word must be start with Digit  "0-9" ; blank/space  is not allow ;
    re = /[^0-9]ello/; // 1st word must be start without Digit  "0-9" ; blank/space  is not allow ;
    re = /^[0-9][0-9]ello/; // 1st 2-latter must be start with Digit  "0-9" ; blank/space  is not allow ;
    re = /^[0-9][0-9][0-9]ello/; // 1st 2-latter must be start with Digit  "0-9" ; blank/space  is not allow ;

     //-----------------------------Querly Braces :{} Quentifier----------------------------------------------------

    re = /hel{2}o/ ; //'latter'{2} = any latter 2 times; this 'hello' word must be 2 'l'. sapce/blank is not allow;
    re = /hel{3}o/ ; //'latter'{3} = any latter 3 times; this 'hello' word must be 2 'l'. sapce/blank is not allow;
    //range : *{2-times, 5-times} 
    re = /hel{3,5}o/ ; //'latter'{3,5} = any latter 3 times; this 'hello' word must be 2 'l'. sapce/blank is not allow;
    re = /hel{2,}o/ ; //'latter'{2,} = any latter started at least 2 times to infinity; this 'hello' word must be 2 'l'. sapce/blank is not allow;
    
    //-----------------------------Grouping () paranthesis: (expression){how many times need ex: 2} 
    re =/^([0-9]){5}/; // start with ^([digit : 0-9]){need at least  digit: 5}

    //Bangladesh Phone number : ------------------------

    re =/^01[0-9]{9}$/; 
    re =/\+8801[0-9]{9}$/;

    //pattern : 1x4x5x: -> ([0-9]x){3}-------------------------
    //pattern : 1x4x5x7x7x9x: -> ([0-9]x){6}

    re = /([0-9]x){3}/
    re = /([0-9][A-Za-z]){3}/


    let str;
   

    str = '1x3x2x';
    str = '1x3x2x5h6p6h7i';
    


   

    reMatch(re,str);

function reMatch(re, str){
    if(re.test(str))
    {
        console.log(`${re.source} is match with => ${str}`)
    }
    else{
        console.log(`${re.source} is not match in ${str}`)
    }
}