const motionPictureDMA={template:`
    <div class="bg-dark">
    <button type="button"
        class="btn btn-primary m-2 text-right"
        data-bs-toggle="modal"
        data-bs-target="#Modal"
        @click="addClick()">
    <i class="fas fa-plus-circle"></i> Add
    </button>
    <table class="table table-dark">
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Release Year</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="mp in motionPictures">
                <td>{{mp.Id}}</td>
                <td>{{mp.Name}}</td>
                <td>{{mp.Description}}</td>
                <td>{{mp.Release_Year}}</td>
                <td>
                    <button type="button" class="btn btn-sm btn-outline-light"
                    data-bs-toggle="modal"
                    data-bs-target="#Modal"
                    @click="editClick(mp)"
                    ><i class="fas fa-edit"></i></button>
                    <button type="button" class="btn btn-sm btn-outline-light" @click="copyClick(mp)"><i class="far fa-copy"></i></button>
                    <button type="button" class="btn btn-sm btn-outline-danger"
                    @click="deleteClick(mp.Id)"
                    ><i class="fas fa-trash-alt"></i></button>
                </td>
            </tr>
        </tbody>
        </thead>
    </table>
    <div class="modal fade bg-dark" id="Modal" tabindex="-1"
        aria-labelledby="ModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="ModalLabel">{{modalTitle}}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
                </div>
                <div class="modal-body bg-dark">
                <div class="d-flex flex-row bd-highlight mb-3">
                    <div class="p-2 w-30 bd-highlight">
                        <div class="input-group mb-3">
                            <span class="input-group-text" >Name</span>
                            <input id="name" type="text" class="form-control w-50" required v-model="Name">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">Description</span>
                            <input id="description" type="text" class="form-control" v-model="Description">
                         </div>  
                        <div class="input-group mb-3">
                            <span class="input-group-text">Release Year</span>
                            <input  id="releaseYear" type="number" min="1000" max="9999" step="1" value="2022" class="form-control" v-model="Release_Year">
                        </div>
                        <div class="p-2 w-50 bd-highlight">
                            <img width="250px" height="250px" :alt="PictureFileName":src="PicturePath+PictureFileName"/>
                            <input class="m-2" type="file" @change="imageUpload"">
                        </div>
                    </div>
                                </div>
                <button type="button" @click="createClick()"
                v-if="Id==0" class="btn btn-primary">
                Save
                </button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" @click="updateClick()"
                v-if="Id!=0" class="btn btn-primary">
                Update
                </button>
                <button type="button"  @click="deleteClick(Id)"
                v-if="Id!=0"  class="btn btn-danger">
                Delete
                </button>
                </div>
            </div>
        </div>
    </div>
    </div>





    `,

    data(){
        return{
            motionPictures:[],
            modalTitle:"",
            Id:0,
            Name:"",
            Description:"",
            Release_Year:"",
            PictureFileName:"banner_anonymous.PNG",
            PicturePath:variables.PICTURE_URL
        }
    },
    methods:{
        refreshData(){
            axios.get(variables.API_URL+"MotionPicture")
            .then((response)=>{
                this.motionPictures=response.data;
            });

        },
        addClick(){
            this.modalTitle="Add Motion Picture";
            this.Id=0;
            this.Name="";
            this.Description="",
            this.PictureFileName="banner_anonymous.PNG"
        },
        editClick(mp){
            this.modalTitle="Edit Motion Picture";
            this.Id=mp.Id;
            this.Name=mp.Name;
            this.Description=mp.Description,
            this.Release_Year=mp.Release_Year,
            this.PictureFileName=mp.PictureFileName
        },
        createClick(){
            if (!this.Name || !this.Release_Year || this.Name.length > 50 || this.Description.length > 500 || this.Release_Year < 999 || this.Release_Year > 10000)
            {
                this.formErrorMsg();
            }
            else 
              {
            axios.post(variables.API_URL+"MotionPicture",{
                Name:this.Name,
                Description:this.Description,
                Release_Year:this.Release_Year,
                PictureFileName:this.PictureFileName
            })
            .then((response)=>{
                this.refreshData();
                alert(response.data);
            });
            }
        },
        copyClick(mp){
            axios.post(variables.API_URL+"MotionPicture",{
                Name:mp.Name,
                Description:mp.Description,
                Release_Year:mp.Release_Year,
                PictureFileName:mp.PictureFileName
            })
            .then((response)=>{
                this.refreshData();
                alert(response.data);
            });
        },
        updateClick(){
            if (!this.Name || !this.Release_Year || this.Name.length > 50 || this.Description.length > 500 || this.Release_Year < 999 || this.Release_Year > 10000)
            {
                this.formErrorMsg();
            }
            else {
            axios.put(variables.API_URL+"MotionPicture",{
                Id:this.Id,
                Name:this.Name,
                Description:this.Description,
                Release_Year:this.Release_Year,
                PictureFileName:this.PictureFileName
            })
        

            .then((response)=>{
                this.refreshData();
                alert(response.data);
            });}
        },
        deleteClick(id){
            if(!confirm("Are you sure?")){
                return;
            }
            axios.delete(variables.API_URL+"MotionPicture/"+id)
            .then((response)=>{
                this.refreshData();
                alert(response.data);
            });

        },
        imageUpload(event){
            let formData=new FormData();
            formData.append('file',event.target.files[0]);
            axios.post(
                variables.API_URL+"MotionPicture/SaveFile",
                formData)
                .then((response)=>{
                    this.PictureFileName=response.data;
                });
        },
        formErrorMsg(){

            console.log("formError")
            if (!this.Name) 
            {
              document.getElementById("name").className="form-control w-50 warning-border";
              alert("Name required.");
              setTimeout(function() {
                  document.getElementById("name").className="form-control w-50";
              }, 1500);

            } 
            if (this.Name.length > 50)
            {
              document.getElementById("name").className="form-control w-50 warning-border";
              alert("Name limited to 50 characters. Your Name has " + this.Name.length + " characters.");
              setTimeout(function() {
                  document.getElementById("name").className="form-control w-50";
              }, 1500);
            } 
            if (this.Description.length > 500)
            {
              document.getElementById("description").className="form-control w-50 warning-border";
              alert("Description limited to 500 characters. Your Description has " + this.Description.length + " characters.");
              setTimeout(function() {
                  document.getElementById("description").className="form-control w-50";
              }, 900);
            }  
            if (!this.Release_Year)
            {
              document.getElementById("releaseYear").className="form-control w-50 warning-border";
              alert("Release Year required.");
              setTimeout(function() {
                  document.getElementById("releaseYear").className="form-control w-50";
              }, 900);
            } 
            else if (this.Release_Year < 999 || this.Release_Year > 10000)
            {
              document.getElementById("releaseYear").className="form-control w-50 warning-border";
              alert("Release Year limited to and must be 4 characters.");
              setTimeout(function() {
                  document.getElementById("releaseYear").className="form-control w-50";
              }, 900);
            }
        },

    },
    mounted:function(){
        this.refreshData();
    }};