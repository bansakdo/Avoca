
function getData() {
    var itemList = new Array();

    var data1 = new Object();
    var data2 = new Object();
    var data3 = new Object();
    var data4 = new Object();
    var data5 = new Object();

    data1.name = "Apple AirPods with Charging Case (Previous Model)";
    data1.img = "img/airpods.jpg";
    data1.cPrice = "$159.00";
    data1.lPrice = "$129.00";
    data1.description = "-";
    data1.asin = "B01MQWUXZS";
    itemList.push(data1);

    data2.name = "Apple iPad Mini (Wi-Fi, 64GB) - Space Gray (Lastest Model)";
    data2.img = "img/ipadmini.jpg";
    data2.cPrice = "$384.00";
    data2.lPrice = "$355.98";
    data2.description = "-";
    data2.asin = "B07PRD2NQ7";
    itemList.push(data2);

    data3.name = "Samsung SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD (MZ-76E1T0B/AM)";
    data3.img = "img/SamsungSSD_860evo.jpg";
    data3.cPrice = "$99.99";
    data3.lPrice = "$99.99";
    data3.description = "-";
    data3.asin = "B078DPCY3T";
    itemList.push(data3);

    data4.name = "Western Digital 1TB WD Blue 3D NAND Internal PC SSD - SATA III 6 Gb/s, 2.5\"/7mm, Up to 560 MB/s - WDS100T2B0A";
    data4.img = "img/WDSSD_blue.jpg";
    data4.cPrice = "$104.99";
    data4.lPrice = "$87.99";
    data4.description = "-";
    data4.asin = "B073SBQMCX";
    itemList.push(data4);

    data5.name = "Samsung (MZ-V7S1T0B/AM) 970 EVO Plus SSD 1TB - M.2 NVMe Interface Internal Solid State Drive with V-NAND Technology";
    data5.img = "img/SamsungSSD_Nvme_970evoPlus.jpg";
    data5.cPrice = "$149.99";
    data5.lPrice = "$149.98";
    data5.description = "-";
    data5.asin = "B07MFZY2F2";
    itemList.push(data5);



    var jsonData = JSON.stringify(itemList);

    return itemList;
};

$(document).ready(function() {



});