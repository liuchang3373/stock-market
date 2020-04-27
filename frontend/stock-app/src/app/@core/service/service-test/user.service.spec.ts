import { TestBed } from '@angular/core/testing';
import { UserService } from '../user.service';
import { of } from 'rxjs'; // Add import
import { HttpClientModule } from '@angular/common/http';


describe('UserService', () => {
  let userService: UserService; // Add this

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientModule],
      providers: [UserService]
    });

    userService = TestBed.get(UserService); // Add this
  });

  it('should be created', () => { // Remove inject()
    expect(userService).toBeTruthy();
  });

  // Add tests for all() method
  describe('getUserListData', () => {
    it('should return a collection of users', () => {
      const userResponse = [
        {
            ID: 1,
            Name: "Nick Jones", 
            Password: "123123",
            UserType: 2,
            Email: "akjlksjd@ibm.com",
            Picture: "assets/images/nick.png",
            MobileNumber: "12311223112",
            Comfirmed: 1
          },
          {
            ID: 2,
            Name: "Eva Moor", 
            Password: "123123",
            UserType: 2,
            Email: "akjlksjd@ibm.com",
            Picture: "assets/images/eva.png",
            MobileNumber: "12311223112",
            Comfirmed: 1
          },
          {
            ID: 3,
            Name: "Jack Liu", 
            Password: "123123",
            UserType: 2,
            Email: "akjlksjd@ibm.com",
            Picture: "assets/images/jack.png",
            MobileNumber: "12311223112",
            Comfirmed: 1
          },
          {
            ID: 4,
            Name: "Lee Wong", 
            Password: "123123",
            UserType: 1,
            Email: "akjlksjd@ibm.com",
            Picture: "assets/images/lee.png",
            MobileNumber: "12311223112",
            Comfirmed: 2
          }
      ];
      let response;
      spyOn(userService, 'getUserListData').and.returnValue(of(userResponse));

      userService.getUserListData().subscribe(res => {
        response = res;
      });

      expect(response).toEqual(userResponse);
    });
  });
});

