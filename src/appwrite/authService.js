import { Client, Account, ID } from "appwrite";
import config from "../conf/config.js";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client //This sets up a connection to a Client service for user
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client); //This sets up a connection to the Account service for the current user or   any user (it is an object of Account class , using this object we user can access multiple services or methods of Account class)
  }

  async createAccount({ name, email, password }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        this.loginUser(email, password);
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Appwrite service :: createAccount :: error ", error);
    }
  }

  async loginUser({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      return error;
    }
  }

  async getUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  async logoutUser() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logoutUser :: error ", error);
    }
    return null;
  }
}

const authService = new AuthService();
export default authService;

// everytime user tries to access the authService object it will create Client and Account connection using which user can
// access multiple services like login logout.

// Instead of creating separate services we could have just call the account.get() , account.create() methods from components
// but it mixes up the usiness logic and UI part.

// also this appproach solves the problem of vendor lock in i.e if in future we change our backend from appwrite to our own
// backend or anyother BAS , we will just have make some changes in our cutom services and constructor ad add the methods
// of new BAS , or real backend.
