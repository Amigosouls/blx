import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { chatdetails } from 'src/models/chat';
import Swal from 'sweetalert2';
import { RegisterationService } from './registeration.service';
import { user_details } from 'src/models/user_details';

@Injectable({
    providedIn: 'root'
})
export class ChatService {
    user_details_url = environment.user_details;
    chatUrl=environment.chat;
   
    constructor(private httpObj: HttpClient,private Regservice:RegisterationService) { }

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


    receiveChatMessage(receiverId:number){
        return this.httpObj.get<chatdetails[]>(this.chatUrl+"/?receiverId="+receiverId);
    }


 }