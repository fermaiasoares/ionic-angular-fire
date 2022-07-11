import { Injectable } from '@angular/core';
import {
    Auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    UserCredential,
    sendPasswordResetEmail
} from '@angular/fire/auth';

interface IAuth {
    email: string;
    password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  async register({ email, password }: IAuth): Promise<UserCredential> {
    try {
        const user = await createUserWithEmailAndPassword(
            this.auth,
            email,
            password
        );

        return user;
    } catch (error) {
        return null;
    }
  }

  async signIn({ email, password }: IAuth): Promise<UserCredential> {
    try {
        const user = await signInWithEmailAndPassword(
            this.auth,
            email,
            password
        );

        return user;
    } catch(error) {
        return null;
    }
  }

  async signOut(): Promise<void> {
    return signOut(this.auth);
  }

  async sendResetPasswordMail(email: string): Promise<void> {
    try {
        await sendPasswordResetEmail(this.auth, email);
    } catch (error) {
        return null;
    }
  }
}
