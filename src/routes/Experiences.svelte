<script>
  import Divider from "../components/Divider.svelte";
</script>

<div class="exp container-md mt-4 mb-5 pb-4">
  <div class="pt-5">
    <Divider />
  </div>
  <h3 class="pt-3">Timeline</h3>
  <p class="exp-desc mb-5">
    Berikut adalah perjalanan karir saya hingga saat ini. Mulai dari menjadi mentor dan membantu menyusun kurikulum hingga menjadi frontend developer.
  </p>
  <div class="experience mb-5">
    <div class="step">
      <div class="stepper">
        <div class="circle">
          <div class="circle2" />
        </div>
        <div class="line"></div>
      </div>
      <div class="content">
        <p class="job">Mobile Flutter Developer</p>
        <p class="company">
          Firstasia Consultants <br>
          <span class="period">Feb 2023 - Present <span class="mx-2">•</span> Fulltime</span>
        </p>
        <div class="text-secondary mb-3">
          Saya adalah mobile developer pertama di sini, tugas saya membantu perusahaan ini untuk mengembangkan 
          produk mereka di sisi aplikasi mobile dengan memastikan arsitektur yang kokoh.
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
        <p class="job">Frontend Developer</p>
        <p class="company">
          Zahir <br>
          <span class="period">Nov 2019 - Feb 2023 <span class="mx-2">•</span> Fulltime</span>
        </p>
        <div class="text-secondary mb-3">
          Saya bertugas dalam mengembangkan aplikasi mobile <em>cross-platform</em> berbasis flutter dan juga aplikasi web berbasis next js. Tanggung jawab utama saya adalah mengoptimasi fitur yang sudah ada 
          dan mengembangkan fitur-fitur baru. Saya juga bertugas melakukan <em>build</em> dan menyiapkan aplikasi untuk masuk ke tahap pengujian.
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
        <p class="job">Mentor</p>
        <p class="company">
          Pondok IT <br>
          <span class="period">Feb 2019 - Sep 2019 <span class="mx-2">•</span> Fulltime</span>
        </p>
        <div class="text-secondary">
          Selain berbagi ilmu, sebagai mentor React JS pada awal-awal batch frontend diadakan saya bertugas menyusun kurikulum frontend bersama tim mentor React JS yang lainnya.
          Kurikulum tersebut mencakup materi tentang dasar-dasar algoritma pemrograman sampai dengan interaksi/komunikasi backend dengan frontend sampai menjadi aplikasi utuh.
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  h3 {
    font-size: 56px;
    font-weight: 800;
    background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .exp-desc {
    max-width: 800px;
    font-size: 24px;
    line-height: 40px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.5);
  }
  .job {
    font-weight: bold;
    color: #fff;
    font-size: 24px;
  }
  .company {
    margin-bottom: 1rem;
    color: #fff;
    font-size: 16px;
  }
  .period {
    font-size: 14px;
    color: rgba(255, 255, 255, .7);
  }
  .step {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 20px;
  }
  .stepper {
    position: relative;
  }
  .stepper .circle {
    border: 7px solid #6c757d;
    background-color: #0f1624;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    display: inline-block;
    position: relative;
  }

  .stepper .circle .circle2 {
    position: absolute;
    border: 3px solid #6c757d;
    background-color: #6c757d;
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
    top: 24px;
    left: 13px;
    height: 100%;
    position: absolute;
    border-left: 6px solid #6c757d;
  }
  .content {
    margin-left: 20px;
    display: inline-block;
  }

  @media only screen and (max-width: 768px) {
    h3 {
      font-size: 32px;
      padding-top: 0px;
      margin-bottom: 18px;
    }
    .exp-desc {
      font-size: 16px;
      line-height: 24px;
    }
  }
</style>