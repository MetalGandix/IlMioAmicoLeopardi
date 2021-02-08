package leopardiproject.csd.model;

public class OTPSystemModel {
    private String cellulare;
    private String otp;
    private long expirytime;

    public String getPhone() {
        PrenotazioneVisita phone = new PrenotazioneVisita();
        return phone.getCellulare();
    }

    public String getCellulare() {
        return cellulare;
    }

    public void setCellulare(String cellulare) {
        this.cellulare = cellulare;
    }

    public String getOtp() {
        return otp;
    }

    public void setOtp(String otp) {
        this.otp = otp;
    }

    public long getExpirytime() {
        return expirytime;
    }

    public void setExpirytime(long expirytime) {
        this.expirytime = expirytime;
    }


}
