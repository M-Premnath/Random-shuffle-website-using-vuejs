<template>
    <div class="doc-viewer">
        <h1>Viewer</h1>
        <iframe src="/assets/src/logo.png">
            <input 
            type ="file"
            @change="handleFilesSelect"
            accept="application/pdf"
            />
        </iframe>
        <viewer/>
    </div>
</template>
<script>
    import Viewer from './Document-viewer.vue'
 export default{
  name:'App',
    components:{
      Viewer
    },
    methods:{
        handleFilesSelect(event){
            const file = event.target.files[0]
            const url =
            URL.createObjectURL(file);
            this.documentUrl=url;
        }
    }
    }

</script>