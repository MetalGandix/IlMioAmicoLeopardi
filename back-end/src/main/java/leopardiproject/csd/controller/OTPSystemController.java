package leopardiproject.csd.controller;

import java.util.HashMap;
import java.util.Map;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import org.springframework.web.bind.annotation.RestController;

import leopardiproject.csd.model.OTPSystemModel;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@RestController
public class OTPSystemController {
    
    private Map<String, OTPSystemModel>otp_data = new HashMap<>();
    private final static String ACCOUNT_SID = "ACf26ecd7c46476a79c78ba8086c2b7df0";
    private final static String AUTH_ID = "c917d52b02108d627b0b1ff70c6cc5d9";

    static {
        Twilio.init(ACCOUNT_SID, AUTH_ID);
    }

    @RequestMapping(value="/mobilenumbers/{mobilenumber}/otp", method=RequestMethod.POST)
    public ResponseEntity<Object>sendOTP(@PathVariable("mobilenumber")String mobilenumber){
        OTPSystemModel otpSystemModel = new OTPSystemModel();
        otpSystemModel.setCellulare(mobilenumber);
        otpSystemModel.setOtp(String.valueOf(((int) (Math.random()*(10000 - 1000))) + 1000));
        otpSystemModel.setExpirytime(System.currentTimeMillis()+20000);
        otp_data.put(mobilenumber, otpSystemModel);
        //otpSystemModel.getPhone()) questo andrà al posto del "to"
        Message.creator(new PhoneNumber(mobilenumber), new PhoneNumber("+1 361 301 2179"), "Your OTP is: " + otpSystemModel.getOtp()).create();
        return new ResponseEntity<> ("OTP is send successfully", HttpStatus.OK);
    }

    @RequestMapping(value = "/mobilenumbers/{mobilenumber}/otp", method = RequestMethod.PUT)
    public ResponseEntity<Object> verifyOTP(@PathVariable("mobilenumber")String mobilenumber, @RequestBody OTPSystemModel requestBodyOTPSystemModel){

        if(requestBodyOTPSystemModel.getOtp() == null || requestBodyOTPSystemModel.getOtp().trim().length()<=0){
            return new ResponseEntity<>("Please provide OTP", HttpStatus.BAD_REQUEST);
        }

        if(otp_data.containsKey(mobilenumber)){
            OTPSystemModel otpSystem = otp_data.get(mobilenumber);
            if(otpSystem!=null){
                if(otpSystem.getExpirytime()>=System.currentTimeMillis()){
                    if(requestBodyOTPSystemModel.getOtp().equals(otpSystem.getOtp())) {
                        return new ResponseEntity<> ("OTP is verified successfully!", HttpStatus.OK);
                    }
                    return new ResponseEntity<>("Invalid OTP", HttpStatus.BAD_REQUEST);
                }
                return new ResponseEntity<>("OTP is expired", HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>("Something went wrong...!!!", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Mobile number not found", HttpStatus.NOT_FOUND);
    }
    

}
