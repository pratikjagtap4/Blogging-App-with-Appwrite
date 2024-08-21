import config from "../conf/config";
import { Client, Databases, ID, Storage, Query } from "appwrite";

export class StorageServices {
  client = new Client();
  database;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  //post services

  async createPost({ title, slug, content, featuredImage, userId, status }) {
    try {
      return await this.database.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        { title, content, featuredImage, userId, status }
      );
    } catch (error) {
      console.log("Appwrite Database service :: Create Post :: error ", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.database.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status }
      );
    } catch (error) {
      console.log("Appwrite Database service :: Update Post :: error ", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.database.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite Database service :: Delete Post :: error ", error);
    }
    return false;
  }

  async getPost(slug) {
    try {
      return await this.database.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite Database service :: Get Post :: error ", error);
    }
  }

  async getAllPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.database.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite Database service :: Get All Post :: error ", error);
    }
  }

  //file and images
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite Database service :: upload file :: error ", error);
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(config.appwriteBucketId, fileId);

      return true;
    } catch (error) {
      console.log("Appwrite Database service :: update Post :: error ", error);
    }
    return false;
  }

  filePreview(fileId) {
    try {
      return this.bucket.getFilePreview(config.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite Database service :: File Preview :: error ", error);
    }
  }
}

const storageServices = new StorageServices();

export default storageServices;
