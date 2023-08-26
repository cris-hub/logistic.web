import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, empty } from 'rxjs';
import { map } from 'rxjs/operators';
import jwt_decode from "jwt-decode";
import { environment } from 'src/environments/environment.prod';
import { User } from '../../models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User | null>;
    public currentUser: Observable<User | null>;

    constructor(private http: HttpClient) {
        let user: any | null = localStorage.getItem('currentUser');
        this.currentUserSubject = new BehaviorSubject<User | null>(JSON.parse(user));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User | null {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/authentication`, { username, password })
            .pipe(map(user => {
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    getDataToken(token: string): any {
        if (token != null) {
            return jwt_decode(token);
        }
        return null;
    }

    logout() {
        let user: any = null;
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(user);
    }
}