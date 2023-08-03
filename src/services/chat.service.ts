import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { chatdetails } from 'src/models/chat';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    constructor(private httpObj: HttpClient) { }

    postChatMsg(data: chatdetails) {
        return this.httpObj.post<chatdetails[]>(environment.chat, data).subscribe(() => {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
            })
            Toast.fire({
                icon: 'success',
                title: 'chat posted successfully'
            })
        })
    }

}