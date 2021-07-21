import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { ApiService } from "../api/api.service";
import { User } from "../data-model/interfaces";

@Injectable()
export class UserSandboxService {
    user = new Subject<User>();
    isLoading = true;

    constructor(private apiService: ApiService){
    }
    public async getUser(username: string){
        this.isLoading = true;
        const user = await this.apiService.getUser(username);
        this.user.next(user);
        this.isLoading = false;
    }
}