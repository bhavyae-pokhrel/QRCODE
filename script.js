const qrText=document.getElementById('qr-text');
const sizes=document.getElementById('sizes');
const generateBtn=document.getElementById('generateBtn');
const downloadBtn=document.getElementById('downloadBtn');
const qrContainer=document.querySelector('.qr-body');

let size=sizes.value;
generateBtn.addEventListener('click',(e)=>{
    // prevent refresh
    e.preventDefault();
    isEmptyInput();
   
});

sizes.addEventListener('change',(e)=>{
    size=e.target.value;
    isEmptyInput();

});

downloadBtn.addEventListener('click',()=>{
    let img=document.querySelector('.qr-body img');

    if(img!==null){
        let imgAtrr=img.getAttribute('src');
        downloadBtn.setAttribute("href",imgAtrr);
    }
    else{
        downloadBtn.setAttribute("href", `${download.querySelector('canvas').toDataURL()}` );
    }
})

function isEmptyInput(){
    qrText.value.length > 0 ? generateQRCode() :alert("Enter the text or URL to generate your QR code");
}

function generateQRCode(){
    qrContainer.innerHTML="";
    new QRCode(qrContainer,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:'#fff',
        colorDark:'#000',
    });
}