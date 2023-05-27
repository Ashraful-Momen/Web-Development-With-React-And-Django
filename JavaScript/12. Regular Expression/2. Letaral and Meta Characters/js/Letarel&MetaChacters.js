// Letarel and Meta Characters:

//Letarel character => re = /hello/; here hello is the Letarel Characters;

// let re = 'hello'; // CaseSetive

//     re = /hello/i; // nonCaseSensetive

//     re = /hell/i;
//     re = /hell/i;
//     re = /lo World/i;
//     re = /loWorld/i; // not match this pattern

// let str;

//     str = "sdfsajdfk Hello world Bangladesh ";

//     console.log(re.exec(str));

//     reMatch(re,str);

// function reMatch(re, str){
//     if(re.test(str))
//     {
//         console.log(`${re.source} is match with => ${str}`)
//     }
//     else{
//         console.log(`${re.source} is not match in ${str}`)
//     }
// }

//-------------------------MetaCharacter: '^hello' start with 'hello',
//------------------------- '$hello' end with , 
//-------------------------'h.llo' must be replace with any one character and blank not allow.
//-------------------------- 'h*llo' this pattern 'h('*** here will be anything****)llo'. And may be exit with any character('anything') on (*) or blank/null / nonexit any character here,
//---------------------------- 'ha?e?llo' here 'a'/'e' -> optional but can't be replace other character----------------------
//------------------------------if we want to pattern '?' then we have to use '\?' // and '\' also known as escape;



let re = 'hello'; // CaseSetive

    re = /hello/i; // nonCaseSensetive

    re = /hell/i;
    re = /^hello/i; // must be start with "hello";
    re = /hello$/i; // must be end with "hello";
    re = /^hello$/i; // must be start+end with "hello";
    re = /h.llo/i; // match with 'h(any latter)llo' and blank is not allow;
    re = /h*llo/i; // match with 'h(any latter)llo' and blank is allow;
    re = /he?llo/i; // match with "h('e' latter)llo" but without 'e' other-latter is not allow ,  and blank is allow;
    re = /he\?llo/i; // match with "he('?' latter)llo" but without '?' other-latter is not allow ,  and blank is not allow;

    

let str;

    // str = "sdfsajdfk Hello world Bangladesh ";
    // str = "hello Bangladesh";
    //    str = "jasdklfjksd hello";

    str ="hello";
    str ="hllo";
    str ="hallo";
    str ="he?llo";


   

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