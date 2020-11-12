<script>
    let interests = ["Backend Development", "Software Architecture", "Bahasa Jerman", "Manajemen Bank"];
    let hobbies = ["Joging", "Menulis", "Baca Novel", "Tilawah", "Fotografi", "Dan masih banyak lagi"];
    let skills = ["Dart", "Javascript", "Typescript", "UI Styling", "Flutter", "React JS", "Next JS", "Express JS"];
</script>

<div class="me-content mx-3 my-4">
    <div class="welcome mb-5">
        <h6 class="text-black mb-4">HALO !</h6>
        <div class="text-secondary">
            Selamat datang di profile saya yang sangat sederhana ini. Salam kenal, bisa dibilang saya adalah orang yang mencintai dunia programming melalui pencarian jati diri.
            Ya, karena sebelum menjadi seorang Programmer saya sempat mempelajari berbagai macam keahlian untuk mengetahui dimana <em>passion</em> saya berada.
            Sampai pada akhirnya saya mulai menekuni bidang ini dan hingga sekarang pun saya masih terus mempelajari dunia teknologi yang sangat luas ini.
            <br><br>
            Saya memiliki passion dalam mengembangkan aplikasi berbasis mobile maupun website dari sisi client (frontend). 
            Seiring berjalannya waktu alhamdulillah ilmu saya semakin bertambah sedikit demi sedikit meskipun masih banyak kekurangan di lain sisi. 
            <br><br>
            Oh iya, website ini masih didesain untuk interface <i>mobile</i> saja. Saya masih mencari inspirasi desain untuk diterapkan pada tampilan desktop.
            Selamat melihat-lihat profile ini, semoga kamu nyaman :)
        </div>
    </div>

    <div class="experience mb-5">
        <h6 class="text-black mb-4">PEKERJAAN</h6>
        <div class="step">
            <div class="stepper">
                <div class="circle">
                    <div class="circle2" />
                </div>
                <div class="line"></div>
            </div>
            <div class="content">
                <p class="job text-black">Frontend Developer</p>
                <p class="company text-black">
                    Zahir <br>
                    <span class="period">Nov 2019 - Sekarang <span class="mx-2">•</span> Fulltime</span>
                </p>
                <div class="text-secondary mb-3">
                    Saya bertugas dalam mengembangkan aplikasi mobile <em>cross-platform</em> berbasis flutter. Tanggung jawab utama saya adalah mengoptimasi fitur yang sudah ada 
                    dan mengembangkan fitur-fitur baru pada aplikasi Tokoku. Saya juga bertugas melakukan <em>build</em> dan menyiapkan aplikasi untuk masuk ke tahap pengujian.
                </div>
            </div>
        </div>
        <div class="step">
            <div class="stepper">
                <div class="circle">
                    <div class="circle2" />
                </div>
                <div class="line"></div>
            </div>
            <div class="content">
                <p class="job text-black">Mentor</p>
                <p class="company text-black">
                    Pondok IT Jogjakarta <br>
                    <span class="period">Feb 2019 - Sep 2019 <span class="mx-2">•</span> Fulltime</span>
                </p>
                <div class="text-secondary">
                    Selain sharing ilmu, sebagai mentor React JS pada awal-awal batch frontend diadakan saya bertugas menyusun kurikulum frontend bersama tim mentor React JS yang lainnya.
                    Kurikulum tersebut mencakup materi tentang dasar-dasar algoritma pemrograman sampai dengan interaksi/komunikasi antara backend dengan frontend.
                </div>
            </div>
        </div>
    </div>
    <div class="row align-items-start">
        <div class="col-md-6">
            <div class="languages" style="margin-top: 30px">
                <h6 class="text-black mb-4">BAHASA</h6>
                <div class="step">
                    <div class="stepper">
                        <div class="circle">
                            <div class="circle2" />
                        </div>
                    </div>
                    <div class="content">
                        <p class="job text-black">Indonesia</p>
                    </div>
                </div>
                <div class="step">
                    <div class="stepper">
                        <div class="circle">
                            <div class="circle2" />
                        </div>
                    </div>
                    <div class="content">
                        <p class="job text-black">Arab <span class="ml-4 lozenges">FUNDAMENTAL</span></p>
                    </div>
                </div>
                <div class="step">
                    <div class="stepper">
                        <div class="circle">
                            <div class="circle2" />
                        </div>
                    </div>
                    <div class="content">
                        <p class="job text-black">Inggris <span class="ml-2 lozenges">FUNDAMENTAL</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="interests" style="margin-top: 30px">
                <h6 class="text-black mb-4">MINAT</h6>
                {#each interests as interest}
                    <div class="step">
                        <div class="stepper">
                            <div class="circle">
                                <div class="circle2" />
                            </div>
                        </div>
                        <div class="content">
                            <p class="job text-black">{interest}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <div class="row align-items-start">
        <div class="col-6" style="margin-top: 35px">
            <h6 class="text-black mb-4">KEAHLIAN</h6>
            {#each skills as skill}
                <div class="step">
                    <div class="stepper">
                        <div class="circle">
                            <div class="circle2" />
                        </div>
                    </div>
                    <div class="content">
                        <p class="job text-black">{skill}</p>
                    </div>
                </div>
            {/each}
        </div>
        <div class="col-6" style="margin-top: 35px">
            <h6 class="text-black mb-4">HOBI</h6>
            {#each hobbies as hobby}
                <div class="step">
                    <div class="stepper">
                        <div class="circle">
                            <div class="circle2" />
                        </div>
                    </div>
                    <div class="content">
                        <p class="job text-black">{hobby}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .me-content {
        margin-top: 2rem;
    }
    h6{
        letter-spacing: .2rem;
        font-weight: bold;
    }
    .job {
        font-weight: bold;
    }
    .company {
        margin-bottom: 0px;
    }
    .period {
        font-size: 12px;
        color: rgba(131,159,150, .5);
    }
    .step {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
    .stepper {
        position: relative;
    }
    .stepper .circle {
        border: 3px solid rgba(131,159,150, .5);
        background-color: #fff;
        border-radius: 100%;
        width: 20px;
        height: 20px;
        display: inline-block;
        position: relative;
    }

    .stepper .circle .circle2 {
        position: absolute;
        border: 3px solid rgba(131,159,150, .5);
        background-color: rgba(131,159,150, .5);
        border-radius: 100%;
        width: 10px;
        height: 10px;
        left: 0;
        right: 0;
        margin: auto;
        top: 0;
        bottom: 0;
        display: inline-block;
    }

    .stepper .line {
        top: 20px;
        left: 9px;
        height: 100%;
        position: absolute;
        border-left: 3px solid rgba(131,159,150, .5);
    }
    .content {
        margin-left: 20px;
        display: inline-block;
    }
    .lozenges {
        border-radius: 4px;
        color: #fff;
        font-size: 10px;
        padding: 5px 8px 5px 8px;
        background-color: rgba(131,159,150, .2);
    }    
</style>