<template>
  <v-container fluid grid-list-lg>
    <!-- List -->
    <v-data-table
      :headers="headers"
      :items="entries"
      :sort-by="headers[0].value"
      class="elevation-0"
      :loading-text="loadingText"
      :loading="loading"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-divider class="mx-4" inset vertical />
          <span class="caption d-none d-md-flex d-xl-none" v-if="description">
            {{ description }}
          </span>
          <v-spacer />
          <slot name="new" />
        </v-toolbar>
      </template>
      <template v-slot:item.thumb="{ item }">
        <v-avatar v-if="item.avatar" class="avatar" size="40">
          <v-img :src="item.avatar">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="secondary" />
              </v-row>
            </template>
          </v-img>
        </v-avatar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          color="info lighten-1"
          blue
          class="mr-2"
          @click="showItem(item)"
        >
          mdi-eye-circle
        </v-icon>
        <v-icon
          v-if="hasEdit"
          color="warning lighten-1"
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil-circle
        </v-icon>
        <v-icon
          v-if="hasDelete"
          color="error lighten-2"
          class="mr-2"
          @click="deleteItem(item)"
        >
          mdi-delete-circle
        </v-icon>
      </template>
      <template v-slot:no-data>
        <p class="subtitle mt-4">{{ emptyText }}</p>
      </template>
    </v-data-table>
    <!-- end List -->

    <!-- delete dialog -->
    <v-dialog v-model="deleteDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <h3 class="title">Removendo</h3>
          <v-spacer />
          <v-btn
            depressed
            color="primary darken-1"
            text
            @click="discardDelete()"
          >
            <v-icon color="secondary">mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <p>
            Deseja remover permanentemente
            <span class="font-weight-bold">"{{ currentItem.name }}"</span>?
          </p>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn color="primary darken-1" text @click="discardDelete()">
            Cancelar
          </v-btn>
          <v-btn
            :loading="deleteLoading"
            color="error darken-1"
            text
            @click="removeItem()"
          >
            Remover
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- end delete dialog -->
  </v-container>
</template>

<script src="./Index.js" />
