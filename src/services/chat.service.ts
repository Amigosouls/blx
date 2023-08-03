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


    receiveChatMessage(id:number){
        return this.httpObj.get<chatdetails>(environment.chat+"/?reciverId="+id);
    
 

    }

    getReceiver() {
        return this.httpObj.get<user_details>(this.user_details_url + '/?islogged_like=true');
      }

}