import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class EmployeeService {
    private apiServiceUrl = ''

    constructor(private http :HttpClient) {}

    public getEmployees(): Observable<any> {
        return this.http.get<any>(`${this.apiServiceUrl}/employee/all`)
    }
}
