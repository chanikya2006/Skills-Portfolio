const btn=document.getElementById('btn');
const btn1=document.getElementById('btn1');
const type1=document.getElementById('type1');
const type2=document.getElementById('type2');
const type3=document.getElementById('type3');
const type4=document.getElementById('type4');
const type5=document.getElementById('type5');
const type6=document.getElementById('type6');

curr_type='type1';
type2.style.display='none';
type3.style.display='none';
type4.style.display='none';
type5.style.display='none';
type6.style.display='none';
btn1.style.visibility='hidden';
btn.addEventListener('click',()=>{
    if(curr_type==='type1'){
        curr_type='type2';
        type1.style.display='none';
        type2.style.display='block';
        btn1.style.visibility='visible';
    }
    else if(curr_type==='type2'){
        curr_type='type3';
        type2.style.display='none';
        type3.style.display='block';
    }
    else if(curr_type==='type3'){
        curr_type='type4';
        type3.style.display='none';
        type4.style.display='block';
    }
    else if(curr_type==='type4'){
        curr_type='type5';
        type4.style.display='none';
        type5.style.display='block';
    }
    else if(curr_type==='type5'){
        curr_type='type6';
        type5.style.display='none';
        type6.style.display='block';
        btn.style.visibility='hidden';
    }

})
btn1.addEventListener('click',()=>{
    if(curr_type==='type2'){
        curr_type='type1';
        type1.style.display='block';
        type2.style.display='none';
        btn1.style.visibility='hidden';
    }
    if(curr_type==='type3'){
        curr_type='type2';
        type2.style.display='block';
        type3.style.display='none';
    }
    if(curr_type==='type4'){
        curr_type='type3';
        type3.style.display='block';
        type4.style.display='none';
    }
    if(curr_type==='type5'){
        curr_type='type4';
        type4.style.display='block';
        type5.style.display='none';
    }
    if(curr_type==='type6'){
        curr_type='type5';
        type5.style.display='block';
        type6.style.display='none';
        btn.style.visibility='visible';
    }
})