<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="custom-shape-divider-bottom-1712120253">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
  </div>
  <div class="bg-txt"><p>Random<br> Shuffle</p></div>
  
  <div class="container">
    <div class="main-txt-1"><h2>Upload Your File and Shuffle Randomly</h2></div>
    <form @submit.prevent="uploadFile">
    <div  class="upload-section">
      <input
        class="btn"
        ref="uploadInput"
        type="file"
        @change="handleFileUpload"
        accept=".csv,.xls,.xlsx"
      />
    </div>
    <button class="uplode-btn" @click="goToResultWithFile">Upload</button>
  </form>
  </div>
  <!-- <div class="viewer">
  <iframe src="" name="iframe-home"></iframe>
  </div>  -->
</template>

<script>
export default {
  data() {
    return {
      selectedFile: null,
      fileContents: "",
      iframeSrc: "",
    };
  },
  methods: {
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];
      this.fileContents = "";

      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        this.fileContents = event.target.result;
      };
      fileReader.readAsText(this.selectedFile);
    },
    async uploadFile() {
      const formData = new FormData();
      formData.append("file", this.selectedFile);

      try {
        const response = await fetch("https://your-backend-api.com/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          this.$router.push("/result");
        } else {
          console.error("File upload failed");
        }
      } catch (error) {
        console.error("File upload failed", error);
      }
    },
    goToResultWithFile() {
      if (this.fileContents) {
        this.iframeSrc = "data:text/plain;charset=utf-8," + encodeURIComponent(this.fileContents);
        this.$refs.uploadInput.value = "";
      } else {
        this.uploadFile();
      }
    },
  },
};
</script>

<style>
/* Add your CSS here */
</style>