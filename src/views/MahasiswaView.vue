<template>
  <div id="list" v-if="isList">
    <a href="javascript::void()" @click.prevent="add">Tambah</a>
    <table>
      <tbody>
        <tr v-for="ls in list">
          <td>{{ ls.nama }}</td>
          <td>{{ ls.jenis_kelamin }}</td>
          <td>{{ ls.alamat }}</td>
          <td>{{ dateFormatLocal(ls.tgl_lahir) }}</td>
          <td>
            <a href="javascript::void()" @click.prevent="edit(ls.id)">
              Ubah
            </a>
            <a href="javascript::void()" @click.prevent="del(ls.id)">
              Hapus
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div id="list" v-if="isEdit || isAdd">
    <form>
      <TextField type="text" v-model="form.nama"/>
      <DateField type="datetime-local" v-model="form.tgl_lahir"/>
      <TextAreaField v-model="form.alamat"/>
      <TextField type="radio" v-model="form.jenis_kelamin" value="Pria"/> Pria
      <TextField type="radio" v-model="form.jenis_kelamin" value="Wanita"/> Wanita
      <a href="javascript::void()" @click.prevent="addMatKul">Tambah</a>
      <table>
        <tr v-for="(ls, idx) in form.mata_kuliah">
          <td>
            <TextField type="text" v-model="ls.nama"/>
          </td>
          <td><a href="javascript::void()" @click.prevent="delMatKul(idx)">Hapus</a></td>
        </tr>
      </table>
      <Upload
        accept=".docx, doc, .xlsx, xls, pdf"
        @file="files"
      />
      <a :href="href" v-if="isFile">SKS</a>

      <button type="submit" @click="submit">Save</button>
    </form>
  </div>
</template>

<script setup>
  import { get, getById, delById, create, update } from "@/js/http"
  import { onMounted, ref } from "vue";
  import TextField from '../components/TextField.vue';
  import TextAreaField from '@/components/TextAreaField.vue';
  import DateField from '@/components/DateField.vue';
  import { dateFormatLocal, dateFormat } from '@/js/date-format';
  import Upload from "@/components/Upload.vue";

  const list = ref([])
  const isList = ref(true)
  const isAdd = ref(false)
  const isEdit = ref(false)
  const form = ref({})
  const isFile = ref(false)
  const href = ref('')
  const label = ref('')

  const getList = () => {
    isList.value = true
    isAdd.value = false
    isEdit.value = false
    label.value = 'Tambah'

    get(`mahasiswa/lists`, { search: null })
    .then((response) => {
      let data = response.data
      list.value = data
    })
    .catch((error) => {
      let response = error
      console.log(response)
      list.value = []
    })
  }

  const add = () => {
    isList.value = false
    isAdd.value = true
    isEdit.value = false
    form.value = {}
    label.value = 'Tambah'
  }

  const edit = (id) => {
    isList.value = false
    isAdd.value = false
    isEdit.value = true
    label.value = 'Ubah'

    getById(`mahasiswa/id`, id)
    .then((response) => {
      let data = response.data,
      mahasiswa = data.mahasiswa,
      mata_kuliah = data.mata_kuliah

      isFile.value = true
      href.value = mahasiswa.sks

      form.value = {
        id: mahasiswa.id,
        nama: mahasiswa.nama,
        jenis_kelamin: mahasiswa.jenis_kelamin,
        alamat: mahasiswa.alamat,
        tgl_lahir: dateFormat(mahasiswa.tgl_lahir),
        mata_kuliah: mata_kuliah,
        sks: mahasiswa.sks
      }
    })
    .catch((error) => {
      let response = error
      console.log(response)
      form.value = {}
    })
  }

  const submit = () => {
    if (label.value === 'Tambah') {
      create('mahasiswa', form.value)
      .then((response) => {
        console.log(response)
        getList()
      })
      .catch((error) => {
        console.log(error)
        getList()
      })
    }
    else {
      update('mahasiswa', form.value, form.value.id)
      .then((response) => {
        console.log(response)
        getList()
      })
      .catch((error) => {
        console.log(error)
        getList()
      })
    }
  }

  const files = (link) => {
    form.value.sks = link
  }

  const addMatKul = () => {
    form.value.mata_kuliah.push({
      nama: ''
    })
  }

  const delMatKul = (idx) => {
    form.value.mata_kuliah.splice(idx, 1)
  }

  const del = (id) => {
    delById(`mahasiswa`, id)
    .then((response) => {
      console.log(response)
      getList()
    })
    .catch((error) => {
      let response = error
      console.log(response)
      getList()
    })
  }

  onMounted(() => {
    getList()
  })
</script>