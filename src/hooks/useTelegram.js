const tg = window.Telegram.WebApp;
export function useTelegram() {


    const onClose =()=>{
        tg.close()
      }
      const onToggleButton =()=>{
        if(tg.MainButton.isBisible){
            tg.MainButton.hide();
        }else{
            tg.MainButton.show();
        }
      }
    return {
        onClose,
        tg,
        user: tg.initDataUnsafe?.user?.user,
    }
}