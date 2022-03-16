<script>
import Card from "./components/Card.svelte";
import Divider from "./components/Divider.svelte";

</script>
<div class="projects container-md mt-4 mb-4">
    <div class="pt-5">
        <Divider />
    </div>
    <h3 class="pt-3">Proyek</h3>
    <p class="project-desc">
        Berikut beberapa proyek yang sudah pernah saya kerjakan dengan berbagai macam teknologi dalam dunia frontend hingga backend.
    </p>
    <div class="d-flex flex-wrap card-row">
        <Card
           imgPath="../../assets/attendance_icon.png"
           title="Zahir Attendance"
           description="Zahir Attendance adalah aplikasi absensi kehadiran yang dibuat untuk memudahkan karyawan yang sedang bekerja onsite ataupun bekerja dari rumah." />
        <div class="space"></div>
        <Card
           imgPath="../../assets/amana-logo.svg"
           title="Amana"
           description="Amana merupakan aplikasi berbasis web untuk para pebisnis online yang bisa membantu bisnis menjadi jauh lebih efektif dan efisien." />
        <div class="space"></div>
        <Card
           imgPath="../../assets/api.png"
           title="Bankboo API"
           description="Restful API ini digunakan pada aplikasi pelayanan bank sampah secara mobile yang saya develop pribadi." />
        <div class="space"></div>
        <div class="more-projects">
            <span>+5</span>
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
    .card-row {
        margin-top: 3rem;
    }
    .project-desc {
        max-width: 800px;
        font-size: 24px;
        line-height: 40px;
        font-weight: 300;
        color: rgba(255, 255, 255, 0.5);
    }
    .space {
        margin-left: 3rem;
    }
    .more-projects {
        position: relative;
        height: 100px;
        width: 100px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23) !important;
        border-radius: 50px;
        margin-top: auto;
        margin-bottom: auto;
    }
    .more-projects:hover {
        cursor: pointer;
    }
    .more-projects span{
        position:absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        font-size: 2.5rem;
        color: #fff;
    }

    @media only screen and (max-width: 768px) {
        h3 {
            font-size: 32px;
            padding-top: 0px;
            margin-bottom: 18px;
        }
        .project-desc {
            font-size: 16px;
            line-height: 24px;
        }
        .card-row {
            margin-top: 0rem;
            justify-content: center;
        }
        .more-projects {
            height: 90px;
            width: 90px;
        }
        .more-projects span {
            font-size: 2rem;
        }
    }

    @media only screen and (max-width: 426px) {
        .space {
            margin-left: 0;
        }
        .more-projects {
            margin-left: 3rem;
            margin-right: 3rem;
        }
    }
</style>