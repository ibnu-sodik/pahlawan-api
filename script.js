const lihatButton = document.querySelector('#btn-lihat');
const keywordName = document.querySelector('.form-control');
lihatButton.addEventListener('click', function() {
	// alert(keywordName.value)
	fetch('https://indonesia-public-static-api.vercel.app/api/heroes?name='+keywordName.value)
	.then(response => response.json())
	.then(response => {
		let result = document.querySelector('.detail-hero')
		var umur = response[0].death_year - response[0].birth_year
		result.innerHTML = `
		<div class="card mb-4 rounded-3 shadow-sm border-primary">
          <div class="card-header py-3 text-white bg-primary border-primary">
            <h4 class="my-0 fw-normal text-center">${response[0].name}</h4>
          </div>
          <div class="card-body">
            <div class="table-responsive">
		      <table class="table text-center">
		        <thead>
		          <tr>
		            <th style="width: 34%;"></th>
		            <th style="width: 22%;"></th>
		            <th style="width: 44%;"></th>
		          </tr>
		        </thead>
		        <tbody>
		          <tr>
		            <th scope="row" class="text-start">Tahun Lahir</th>
		            <td>:</td>
		            <td>${response[0].birth_year}</td>
		          </tr>
		          <tr>
		            <th scope="row" class="text-start">Tahun Wafat</th>
		            <td>:</td>
		            <td>${response[0].death_year}</td>
		          </tr>
		          <tr>
		            <th scope="row" class="text-start">Usia</th>
		            <td>:</td>
		            <td>${umur} tahun</td>
		          </tr>
		          <tr>
		            <th scope="row" class="text-start">Rekam Jejak</th>
		            <td>:</td>
		            <td class="text-justify">${response[0].description}</td>
		          </tr>
		        </tbody>
		      </table>
    		</div>
          </div>
        </div>
		`
	})
	keywordName.value = null;
})

document.addEventListener('DOMContentLoaded', () => {
	const daftarPahlawan = document.querySelector('#daftar-hero');
	fetch('https://indonesia-public-static-api.vercel.app/api/heroes')
	.then(res => {
		return res.json();
	}).then(data => {
		let output = '<option value="">--- Pilih Pahlawan ---</option>';
		data.forEach(hero => {
			output += `
			<option value="${hero.name}">${hero.name}</option>`;
		})
		daftarPahlawan.innerHTML = output;
	}).catch(err => {
		console.log(err);
	});
});

$(document).ready(function() {
	$('.select2').select2({
		width: '100%',
		theme: "classic"
	});
});