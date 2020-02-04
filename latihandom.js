class Todo{
    constructor(kegiatan,gambar,hari){
        this.kegiatan=kegiatan,
        this.gambar=gambar,
        this.hari=hari
    }
}
var data=[
    new Todo('lari','https://www.femina.co.id/images/images/PERSIAPAN%20LARI.jpg','senin'),
    new Todo('shopping','https://www.parkgrandpaddingtoncourt.co.uk/blog/wp-content/uploads/2017/10/Shopping.jpg','selasa')
]
var indexdelete=-1
var indexedit=-1
const printdata=()=>{
    var output=''
    data.forEach((val,index)=>{
        if(index==indexdelete){
            output+=`   <tr>
                            <td>${index+1}</td>
                            <td>${val.kegiatan}</td>
                            <td><img src=${val.gambar} alt=${index} height='200px'></td>
                            <td>${val.hari}</td>
                            <td>
                                <button onclick="acceptDelete(${index})">Yes</button>
                                <button onclick="canceldelete()">No</button>
                            </td>
                        </tr>`
        }else if(index==indexedit){
            output+=`   <tr>
                            <td>${index+1}</td>
                            <td><input type="text" id='editkegiatan' placeholder="nama kegiatan" value=${data[indexedit].kegiatan}></td>
                            <td><input type="text" id='editgambar' placeholder="Gambar" value=${data[indexedit].gambar}></td>
                            <td>
                                <select id="edithari" >
                                    <option hidden value="">pilih hari ..</option>
                                    <option value="senin">senin</option>
                                    <option value="selasa">selasa</option>
                                    <option value="rabu">rabu</option>
                                    <option value="kamis">kamis</option>
                                    <option value="jumat">jumat</option>
                                    <option value="sabtu">sabtu</option>
                                    <option value="minggu">minggu</option>
                                </select>
                            
                            </td>
                            <td>
                                <button onclick="updatedata(${index})">Save</button>
                                <button onclick="cancelupdatedata()">Cancel</button>
                        </tr>`
        }
        
        
        else{
            output+=`   <tr>
                            <td>${index+1}</td>
                            <td>${val.kegiatan}</td>
                            <td><img src=${val.gambar} alt=${index} height='200px'></td>
                            <td>${val.hari}</td>
                            <td>
                                <button onclick="editkegiatan(${index})">edit</button>
                                <button onclick="deletekegiatan(${index})">delete</button>
                            </td>
                        </tr>`
        }
    })
    document.getElementsByTagName('tbody')[0].innerHTML=output
}
printdata()


const editkegiatan=(indexed)=>{
    indexedit=indexed
    printdata()
}

const updatedata=(indexed)=>{
    var newkegiatan=document.getElementById('editkegiatan').value
    var newimage=document.getElementById('editgambar').value
    var newhari=document.getElementById('edithari').value
    if(newhari===''){
        newhari=data[indexed].hari
    }
    if(newimage===''){
        newimage=data[indexed].gambar
    }
    if(newkegiatan===''){
        newkegiatan=data[indexed].kegiatan
    }
    data.splice(indexed,1,new Todo(newkegiatan,newimage,newhari))
    indexedit=-1
    printdata()
}

const cancelupdatedata=()=>{
    indexedit=-1
    printdata()
}

const deletekegiatan=(indexdel)=>{
    indexdelete=indexdel
    printdata()
}
const acceptDelete=(indexdel)=>{
    data.splice(indexdel,1)
    indexdelete=-1
    printdata()

}
const canceldelete=()=>{
    indexdelete=-1
    printdata()
}

const inputdataonClick=()=>{
    var kegiatan=document.getElementById('kegiatan').value
    var gambar=document.getElementById('gambar').value
    var hari=document.getElementById('hari').value
    if(kegiatan==''||gambar==''||hari==''){
        alert('coba input semua dulu')
    }else{
        data.push(new Todo(kegiatan,gambar,hari))
        document.getElementById('kegiatan').value=''
        document.getElementById('gambar').value=''
        document.getElementById('hari').value=''
        printdata()
    }
}
