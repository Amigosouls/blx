import { Component, OnInit } from '@angular/core';
import { PostadService } from 'src/services/postad.service';
import { PostAd } from 'src/models/postad';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FavouritesService } from 'src/services/favourites.service';
import { Favourites } from 'src/models/favourites';
import { RegisterationService } from 'src/services/registeration.service';
import { user_details } from 'src/models/user_details';
import Swal from 'sweetalert2';
import { chatdetails } from 'src/models/chat';
import { ChatService } from 'src/services/chat.service';
@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css'],
})
export class ViewproductComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  constructor(private postAd: PostadService,
    private actRoute: ActivatedRoute, private favService: FavouritesService, private chat: ChatService, private registerService: RegisterationService, private router: Router,) { }

  productId!: number;
  userId!: number;
  model: PostAd[] = [];
  activeUser:user_details[]=[];
  postedUser: user_details = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    avatar: '',
    confirmpassword: '',
    state: '',
    islogged: false,
    user_id: 0,
    secret: '',   
    id: 0
  }
  postChat!: FormGroup;
  chatPost!: FormControl;
  receiverName!:FormControl;
  receiverId!:FormControl;
  userChat: chatdetails = {
    senderId: 0,
    receiverId:0,
    postedDate: new Date().toLocaleDateString(),
    senderName: '',
    receiverName: '',
    chatPost: ''
  };

  postChatDetails() {
    this.postChat.value.senderId=this.activeUser[0].id;
    this.postChat.value.senderName=this.activeUser[0].firstname;
    this.chat.postChatMsg(this.postChat.value);
  }
  name: string = "";
  ngOnInit() {
    this.productId = this.actRoute.snapshot.params['id'];
    this.registerService.getActiveUser().subscribe(
      (res)=>{
        this.activeUser=res;
      }
      );
    this.postAd.getProductById(this.productId).subscribe((res) => {
      this.model = res;
      this.activeUserId = this.model[0].user_id;
      console.log(this.activeUserId);
      this.registerService.getUserName(this.activeUserId).subscribe((res) => {
        this.postedUser = res;
        this.receiverId.setValue(this.postedUser.id);
        this.receiverName.setValue(this.postedUser.firstname);
      })
    });
  
    this.chatPost = new FormControl('', [Validators.required]);
    this.receiverName = new FormControl('', [Validators.required]);
    this.receiverId = new FormControl('', [Validators.required]);
    this.postChat = new FormGroup({
      chatPost: this.chatPost,
      receiverId:this.receiverId,
      receiverName:this.receiverName

    })
  }

  activeUserId: number = 0;
  fav: Favourites = {
    brand: '',
    year: 0,
    kmdriven: 0,
    adtitle: '',
    description: '',
    price: 0,
    city: '',
    imagelink: '',
    user_id: 0,
  };

  addtoFav(products: Favourites) {


    this.registerService.getActiveUser().subscribe(
      (response) => {
        this.fav.brand = products.brand;
        this.fav.year = products.year;
        this.fav.kmdriven = products.kmdriven;
        this.fav.adtitle = products.adtitle;
        this.fav.description = products.description;
        this.fav.price = products.price;
        this.fav.city = products.city;
        this.fav.imagelink = products.imagelink;
        this.fav.user_id = response[0].id;
        console.log(this.activeUserId);
        const token = localStorage.getItem('token');
        if (token) {
          this.favService.addtoFav(this.fav);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Please login to continue',
            text: 'You need an account for adding favourite list',
          });
          this.router.navigate(['/signin']);
        }
      }
    )
  }


}
