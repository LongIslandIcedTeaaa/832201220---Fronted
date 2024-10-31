<template>
  <div id="app">
    <contact-form @contact-added="fetchContacts" @contact-updated="fetchContacts"></contact-form>
    <contact-list :contacts="contacts" @edit-contact="editContact" @contact-deleted="fetchContacts"></contact-list>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      contacts: []
    };
  },
  methods: {
    fetchContacts() {
      axios.get('/api/contacts').then(response => {
        this.contacts = response.data;
      });
    },
    editContact(contact) {
      // 实现编辑联系人的逻辑
    }
  },
  mounted() {
    this.fetchContacts();
  }
};
</script>
