var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var nameInput = document.getElementById('name')
var downloadBtn = document.getElementById('download-btn')

var date = document.getElementById('date')
var fileno = document.getElementById('file')
var address = document.getElementById('address')


var image = new Image()
image.crossOrigin="anonymous";
image.src = 'Group.png'
image.onload = function () {
	drawImage()
    drawImage1()
    drawImage2()
    drawImage3()
}

function drawImage() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '40px monotype '
	ctx.fillStyle = '#29e'
	ctx.fillText(nameInput.value, 240, 230)
    ctx.fillText(date.value, 200, 100)
	ctx.fillText(fileno.value, 700, 100)
    ctx.fillText(address.value, 220, 363)



}
function drawImage1(){
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '40px monotype '
	ctx.fillStyle = '#29e'
	ctx.fillText(nameInput.value, 240, 230)
    ctx.fillText(date.value, 200, 100)
	ctx.fillText(fileno.value, 700, 100)
    ctx.fillText(address.value, 220, 363)
}
function drawImage2(){
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '40px monotype '
	ctx.fillStyle = '#29e'
    ctx.fillText(nameInput.value, 240, 230)
    ctx.fillText(date.value, 200, 100)
	ctx.fillText(fileno.value, 700, 100)
    ctx.fillText(address.value, 220, 363)}
function drawImage3(){
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '40px monotype '
	ctx.fillStyle = '#29e'
    ctx.fillText(nameInput.value, 240, 230)
    ctx.fillText(date.value, 200, 100)
	ctx.fillText(fileno.value, 700, 100)
    ctx.fillText(address.value, 220, 363)}

nameInput.addEventListener('input', function () {
	drawImage()
})
fileno.addEventListener('input', function () {
	drawImage2();
})
date.addEventListener('input', function () {
	drawImage1()
})
address.addEventListener('input', function () {
	drawImage3()
})

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/jpg')
	downloadBtn.download = 'nameplate - ' + nameInput.value
})
