var mahasiswa = {
  //Properti adalah variable yang ada di dalam object.
  nama: "Hanif Hafizhan",
  umur: 20,
  universitas: "ITB",
  IPSemester: [2.78, 2.9, 3.5, 3.25],
  //Function yang ada di dalam object disebut method.
  IPKumulatif: function () {
    var total = 0;
    var ips = this.IPSemester;
    for (var i = 0; i < ips.length; i++) {
      //   total += this.IPSemester[i];
      // Atau
      total += ips[i];
    }
    return total / ips.length;
  },
  //Object didalam Object.
  alamat: {
    jalan: "Jalan Bumi Prima Raya, Komplek Taman Bumi Prima Blok N9",
    kota: "Cimahi",
    kecamatan: "Cimahi Utara",
    kelurahan: "Cibabat",
    provinsi: "Jawa Barat",
  },
  jurusan: "Teknik Informatika",
};
