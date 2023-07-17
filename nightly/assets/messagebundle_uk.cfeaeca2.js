const E="\u0412\u043C\u0456\u0441\u0442 \u043A\u0430\u0440\u0442\u043A\u0438",_="\u041A\u0430\u0440\u0442\u043A\u0430",T="\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043A\u0430\u0440\u0442\u043A\u0438",A="\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0456\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0457 \u043A\u0430\u0440\u0442\u043A\u0438",I="\u0410\u0432\u0430\u0442\u0430\u0440",R="{0} \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043E, {1} \u043F\u0440\u0438\u0445\u043E\u0432\u0430\u043D\u043E.",O="\u0410\u043A\u0442\u0438\u0432\u0443\u0432\u0430\u0442\u0438 \u0434\u043B\u044F \u0432\u0441\u044C\u043E\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0443.",L="\u041E\u043A\u0440\u0435\u043C\u0456 \u0430\u0432\u0430\u0442\u0430\u0440\u0438.",N="\u041E\u0431\u2019\u0454\u0434\u043D\u0430\u043D\u0456 \u0430\u0432\u0430\u0442\u0430\u0440\u0438.",S="\u0414\u043B\u044F \u043F\u0435\u0440\u0435\u043C\u0456\u0449\u0435\u043D\u043D\u044F \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043A\u043B\u0430\u0432\u0456\u0448\u0456 \u0437\u0456 \u0421\u0422\u0420\u0406\u041B\u041A\u0410\u041C\u0418.",C="\u0411\u0435\u0439\u0434\u0436",D="{0} \u0437 {1}",P="\u041D\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u0439\u043D\u0430 \u0441\u0442\u0435\u0436\u043A\u0430",B="\u0411\u0456\u043B\u044C\u0448\u0435",U="\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",t="\u0417\u0430\u0447\u0435\u043A\u0430\u0439\u0442\u0435",s="\u041F\u043E\u0437\u0438\u0442\u0438\u0432\u043D\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u044F",n="\u041D\u0435\u0433\u0430\u0442\u0438\u0432\u043D\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u044F",o="\u0412\u0438\u0434\u0456\u043B\u0435\u043D\u043E",c="\u0437",M="\u041F\u043E\u0437\u0438\u0446\u0456\u044F {0} \u0437 {1} \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0430",G="\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044F \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430",K="\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430",V="\u041F\u0430\u043B\u0456\u0442\u0440\u0430 \u043A\u043E\u043B\u044C\u043E\u0440\u0456\u0432 - \u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044C\u043E \u0432\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u0456 \u043A\u043E\u043B\u044C\u043E\u0440\u0438",H="\u041F\u0430\u043B\u0456\u0442\u0440\u0430 \u043A\u043E\u043B\u044C\u043E\u0440\u0456\u0432",X="\u041A\u043E\u043B\u0456\u0440",Y="\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",W="OK",F="\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u043A\u043E\u043B\u0456\u0440",Z="\u0411\u0456\u043B\u044C\u0448\u0435 \u043A\u043E\u043B\u044C\u043E\u0440\u0456\u0432...",e="\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \u0440\u0435\u0433\u0443\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u0410\u043B\u044C\u0444\u0430",a="\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \u0440\u0435\u0433\u0443\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u0432\u0456\u0434\u0442\u0456\u043D\u043A\u0443",f="\u0428\u0456\u0441\u0442\u043D\u0430\u0434\u0446\u044F\u0442\u043A\u043E\u0432\u0438\u0439",l="\u0427\u0435\u0440\u0432\u043E\u043D\u0438\u0439",u="\u0417\u0435\u043B\u0435\u043D\u0438\u0439",d="\u0421\u0438\u043D\u0456\u0439",h="\u0410\u043B\u044C\u0444\u0430",i="\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u0432\u0430\u043B\u044C\u043D\u0438\u043A",r="\u0412\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0434\u0430\u0442\u0438",J="\u0412\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0434\u0430\u0442\u0438/\u0447\u0430\u0441\u0443",b="\u0412\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u0443 \u0434\u0430\u0442",g="\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",k="\u041E\u0433\u043B\u044F\u0434...",m="\u0412\u0438\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u0430\u0439\u043B",p="\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0433\u0440\u0443\u043F\u0438",x="\u0421\u043F\u0438\u0441\u043E\u043A",j="\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u043E\u043F\u0446\u0456\u0457",q="\u041F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0456",v="\u0412\u0438\u0431\u0440\u0430\u0442\u0438",w="\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0439 1 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",y="{0} \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0456\u0432 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E",z="\u041D\u0435\u043C\u0430\u0454 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0456\u0432",Q="\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u043D\u0438\u0439",$="\u0412\u0438\u0434\u0456\u043B\u0435\u043D\u043E",EE="\u041F\u043E\u0437\u0438\u0446\u0456\u044F \u0441\u043F\u0438\u0441\u043A\u0443 {0} \u0437 {1}",_E="\u0412\u0438\u0431\u0440\u0430\u043D\u0435",TE="\u041D\u0435 \u0432\u0438\u0431\u0440\u0430\u043D\u043E",AE="\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0433\u0440\u0443\u043F\u0438",IE="\u0420\u0435\u0436\u0438\u043C \u043C\u043D\u043E\u0436\u0438\u043D\u043D\u043E\u0433\u043E \u0432\u0438\u0431\u043E\u0440\u0443",RE="\u0412\u0438\u0431\u0456\u0440 \u043F\u043E\u0437\u0438\u0446\u0456\u0457.",OE="\u041C\u0456\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u0437 \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044E \u0432\u0438\u0431\u043E\u0440\u0443",LE="\u041C\u0456\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u0437 \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044E \u043C\u043D\u043E\u0436\u0438\u043D\u043D\u043E\u0433\u043E \u0432\u0438\u0431\u043E\u0440\u0443",NE="\u041C\u0456\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u0437 \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F",SE="\u0417\u0430\u043A\u0440\u0438\u0442\u0442\u044F \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0439\u043D\u043E\u0457 \u043F\u0430\u043D\u0435\u043B\u0456",CE="\u0417 \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044E \u0437\u0430\u043A\u0440\u0438\u0442\u0442\u044F",DE="\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0439\u043D\u043E\u0457 \u043F\u0430\u043D\u0435\u043B\u0456",PE="\u0417\u0430\u0441\u0442\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0439\u043D\u043E\u0457 \u043F\u0430\u043D\u0435\u043B\u0456",BE="\u0423\u0441\u043F\u0456\u0445 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0439\u043D\u043E\u0457 \u043F\u0430\u043D\u0435\u043B\u0456",UE="\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0439\u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u044C",tE="OK",sE="\u0426\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0432\u0436\u0435 \u0432\u0438\u0431\u0440\u0430\u043D\u043E.",nE="\u0411\u0430\u0433\u0430\u0442\u043E\u0437\u043D\u0430\u0447\u043D\u0435 \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044F",oE="{0} \u0431\u0456\u043B\u044C\u0448\u0435",cE="\u0420\u043E\u0437\u0433\u043E\u0440\u043D\u0443\u0442\u0438/\u0437\u0433\u043E\u0440\u043D\u0443\u0442\u0438",ME="\u0414\u0456\u0430\u043F\u0430\u0437\u043E\u043D",GE="\u041B\u0456\u0432\u0438\u0439 \u043F\u043E\u0432\u0437\u0443\u043D\u043E\u043A",KE="\u041F\u0440\u0430\u0432\u0438\u0439 \u043F\u043E\u0432\u0437\u0443\u043D\u043E\u043A",VE="\u0420\u0435\u0439\u0442\u0438\u043D\u0433",HE="\u0406\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0443",XE="\u041E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u043E",YE="\u0412\u0456\u0434\u0445\u0438\u043B\u0438\u0442\u0438",WE="\u0413\u0440\u0443\u043F\u0430 \u0441\u0435\u0433\u043C\u0435\u043D\u0442\u043E\u0432\u0430\u043D\u0438\u0445 \u043A\u043D\u043E\u043F\u043E\u043A",FE="\u041D\u0430\u0441\u0442\u0438\u0441\u043D\u0443\u0442\u0438 \u041F\u0420\u041E\u0411\u0406\u041B \u0430\u0431\u043E ENTER \u0434\u043B\u044F \u0432\u0438\u0431\u043E\u0440\u0443 \u043F\u043E\u0437\u0438\u0446\u0456\u0457",ZE="\u0421\u0435\u0433\u043C\u0435\u043D\u0442\u043E\u0432\u0430\u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0430",eE="\u041C\u0430\u0440\u043A\u0435\u0440 \u043F\u043E\u0432\u0437\u0443\u043D\u043A\u0430",aE="\u0411\u0456\u043B\u044C\u0448\u0435",fE="\u0420\u044F\u0434\u043E\u043A \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430 1 \u0437 {0}",lE="{0} \u0437 {1}",uE="\u0420\u044F\u0434\u043E\u043A \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430 \u0433\u0440\u0443\u043F\u0438",dE="\u0412\u0438\u0431\u0456\u0440 \u043F\u043E\u0437\u0438\u0446\u0456\u0457",hE="\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0432\u0441\u0456 \u0440\u044F\u0434\u043A\u0438",iE="\u041F\u043E\u0440\u043E\u0436\u043D\u0454",rE="\u0414\u043E\u0434\u0430\u0442\u043D\u0435",JE="\u0412\u0456\u0434\u2019\u0454\u043C\u043D\u0435",bE="\u041A\u0440\u0438\u0442\u0438\u0447\u043D\u043E",gE="\u041D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u043E",kE="\u0412\u043A\u043B\u0430\u0434\u043A\u0430 \u0437 \u043F\u0456\u0434\u043F\u043E\u0437\u0438\u0446\u0456\u044F\u043C\u0438",mE="\u0414\u0430\u043B\u0456",pE="\u041D\u0430\u0437\u0430\u0434",xE="\u041C\u0435\u043D\u044E \u043F\u0435\u0440\u0435\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F",jE="\u0411\u0456\u043B\u044C\u0448\u0435",qE="\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",vE="\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043A\u043B\u0430\u0432\u0456\u0448\u0443 \u0437\u0456 \u0441\u0442\u0440\u0456\u043B\u043A\u043E\u044E \u0432\u043D\u0438\u0437, \u0449\u043E\u0431 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043C\u0435\u043D\u044E \u043F\u0456\u0434\u043F\u043E\u0437\u0438\u0446\u0456\u0439",wE="{0} \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432 \u0437\u0430\u043B\u0438\u0448\u0438\u043B\u043E\u0441\u044C",yE="{0} \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432 \u0437\u0430 \u043C\u0435\u0436\u0435\u044E",zE="\u0413\u043E\u0434\u0438\u043D\u0438",QE="\u0425\u0432\u0438\u043B\u0438\u043D\u0438",$E="\u0421\u0435\u043A\u0443\u043D\u0434\u0438",E_="OK",__="\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",T_="\u0412\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0447\u0430\u0441\u0443",A_="\u0426\u0438\u0444\u0435\u0440\u0431\u043B\u0430\u0442",I_="\u0412\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0442\u0440\u0438\u0432\u0430\u043B\u043E\u0441\u0442\u0456",R_="\u0414\u0430\u0442\u0430",O_="\u0427\u0430\u0441",L_="\u041C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E",N_="\u041C\u0456\u0442\u043E\u043A \u043D\u0435\u043C\u0430\u0454",S_="\u041C\u0456\u0441\u0442\u0438\u0442\u044C 1 \u043C\u0456\u0442\u043A\u0443",C_="\u041C\u0456\u0441\u0442\u0438\u0442\u044C {0} \u043C\u0456\u0442\u043E\u043A",D_="\u0413\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u043C\u0456\u0442\u043E\u043A",P_="\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",B_="\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \u0434\u0435\u0440\u0435\u0432\u0430",U_="\u0420\u043E\u0437\u0433\u043E\u0440\u043D\u0443\u0442\u0438 \u0432\u0443\u0437\u043E\u043B",t_="\u0417\u0433\u043E\u0440\u043D\u0443\u0442\u0438 \u0432\u0443\u0437\u043E\u043B",s_="\u0421\u0442\u0430\u043D \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F: \u043F\u043E\u043C\u0438\u043B\u043A\u0430",n_="\u0421\u0442\u0430\u043D \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F: \u0437\u0430\u0441\u0442\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F",o_="\u0421\u0442\u0430\u043D \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F: \u0443\u0441\u043F\u0456\u0445",c_="\u0421\u0442\u0430\u043D \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F: \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F",M_="\u041D\u0435\u0434\u0456\u0439\u0441\u043D\u0438\u0439 \u0437\u0430\u043F\u0438\u0441",G_="\u0417\u0430\u0441\u0442\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F \u0432\u0438\u0434\u0430\u043D\u043E",K_="\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u0438\u0439 \u0437\u0430\u043F\u0438\u0441",V_="\u0417\u0430\u043F\u0438\u0441 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0435\u043D\u043E",H_="\u0414\u0430\u043B\u0456",X_="\u041D\u0430\u0437\u0430\u0434",Y_="\u041D\u043E\u043C\u0435\u0440 \u0442\u0438\u0436\u043D\u044F",W_="\u041D\u0435\u0440\u043E\u0431\u043E\u0447\u0438\u0439 \u0434\u0435\u043D\u044C",F_="\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456",Z_="\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u0432\u0430\u043B\u044C\u043D\u0438\u043A \u043C\u0456\u0441\u044F\u0446\u044F",e_="\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u0432\u0430\u043B\u044C\u043D\u0438\u043A \u0440\u043E\u043A\u0443",a_="\u0417\u043C\u0435\u043D\u0448\u0438\u0442\u0438",f_="\u0417\u0431\u0456\u043B\u044C\u0448\u0438\u0442\u0438",l_="\u041A\u043D\u043E\u043F\u043A\u0430 \u0440\u043E\u0437\u0434\u0456\u043B\u0435\u043D\u043D\u044F",u_="\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043A\u043B\u0430\u0432\u0456\u0448\u0443 \u043F\u0440\u043E\u0431\u0456\u043B\u0443 \u0430\u0431\u043E Enter \u0434\u043B\u044F \u0456\u043D\u0456\u0446\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u0443\u0441\u0442\u0430\u043B\u0435\u043D\u043E\u0457 \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u0457, \u0442\u0430 Alt + \u0441\u0442\u0440\u0456\u043B\u043A\u0430 \u0432\u043D\u0438\u0437 \u0430\u0431\u043E F4 \u0434\u043B\u044F \u0456\u043D\u0456\u0446\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u0457 \u0441\u0442\u0440\u0456\u043B\u043A\u0438",d_="\u041D\u0430\u0437\u0430\u0434",h_="\u0412\u0456\u0434\u0445\u0438\u043B\u0438\u0442\u0438",i_="\u0406\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u0438\u0439 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",r_="\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0439\u0442\u0435 \u043A\u043B\u0430\u0432\u0456\u0448\u0443 Shift + \u043A\u043B\u0430\u0432\u0456\u0448\u0456 \u0437\u0456 \u0441\u0442\u0440\u0456\u043B\u043A\u0430\u043C\u0438 \u0434\u043B\u044F \u0437\u043C\u0456\u043D\u0438 \u0440\u043E\u0437\u043C\u0456\u0440\u0443",J_="\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0439\u0442\u0435 \u043A\u043B\u0430\u0432\u0456\u0448\u0456 \u0437\u0456 \u0441\u0442\u0440\u0456\u043B\u043A\u0430\u043C\u0438 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u043C\u0456\u0449\u0435\u043D\u043D\u044F",b_="\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0439\u0442\u0435 \u043A\u043B\u0430\u0432\u0456\u0448\u0456 \u0437\u0456 \u0441\u0442\u0440\u0456\u043B\u043A\u0430\u043C\u0438 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u043C\u0456\u0449\u0435\u043D\u043D\u044F, \u043A\u043B\u0430\u0432\u0456\u0448\u0443 Shift + \u043A\u043B\u0430\u0432\u0456\u0448\u0456 \u0437\u0456 \u0441\u0442\u0440\u0456\u043B\u043A\u0430\u043C\u0438 \u0434\u043B\u044F \u0437\u043C\u0456\u043D\u0438 \u0440\u043E\u0437\u043C\u0456\u0440\u0443",g_=":",k_={ARIA_LABEL_CARD_CONTENT:E,ARIA_ROLEDESCRIPTION_CARD:_,ARIA_ROLEDESCRIPTION_CARD_HEADER:T,ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER:A,AVATAR_TOOLTIP:I,AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL:R,AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL:O,AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL:L,AVATAR_GROUP_ARIA_LABEL_GROUP:N,AVATAR_GROUP_MOVE:S,BADGE_DESCRIPTION:C,BREADCRUMB_ITEM_POS:D,BREADCRUMBS_ARIA_LABEL:P,BREADCRUMBS_OVERFLOW_ARIA_LABEL:B,BREADCRUMBS_CANCEL_BUTTON:U,BUSY_INDICATOR_TITLE:t,BUTTON_ARIA_TYPE_ACCEPT:s,BUTTON_ARIA_TYPE_REJECT:n,BUTTON_ARIA_TYPE_EMPHASIZED:o,CAROUSEL_OF_TEXT:c,CAROUSEL_DOT_TEXT:M,CAROUSEL_PREVIOUS_ARROW_TEXT:G,CAROUSEL_NEXT_ARROW_TEXT:K,COLORPALETTE_CONTAINER_LABEL:V,COLORPALETTE_POPOVER_TITLE:H,COLORPALETTE_COLOR_LABEL:X,COLOR_PALETTE_DIALOG_CANCEL_BUTTON:Y,COLOR_PALETTE_DIALOG_OK_BUTTON:W,COLOR_PALETTE_DIALOG_TITLE:F,COLOR_PALETTE_MORE_COLORS_TEXT:Z,COLORPICKER_ALPHA_SLIDER:e,COLORPICKER_HUE_SLIDER:a,COLORPICKER_HEX:f,COLORPICKER_RED:l,COLORPICKER_GREEN:u,COLORPICKER_BLUE:d,COLORPICKER_ALPHA:h,DATEPICKER_OPEN_ICON_TITLE:i,DATEPICKER_DATE_DESCRIPTION:r,DATETIME_DESCRIPTION:J,DATERANGE_DESCRIPTION:b,DELETE:g,FILEUPLOAD_BROWSE:k,FILEUPLOADER_TITLE:m,GROUP_HEADER_TEXT:p,SELECT_ROLE_DESCRIPTION:x,SELECT_OPTIONS:j,INPUT_SUGGESTIONS:q,INPUT_SUGGESTIONS_TITLE:v,INPUT_SUGGESTIONS_ONE_HIT:w,INPUT_SUGGESTIONS_MORE_HITS:y,INPUT_SUGGESTIONS_NO_HIT:z,LINK_SUBTLE:Q,LINK_EMPHASIZED:$,LIST_ITEM_POSITION:EE,LIST_ITEM_SELECTED:_E,LIST_ITEM_NOT_SELECTED:TE,LIST_ITEM_GROUP_HEADER:AE,ARIA_LABEL_LIST_ITEM_CHECKBOX:IE,ARIA_LABEL_LIST_ITEM_RADIO_BUTTON:RE,ARIA_LABEL_LIST_SELECTABLE:OE,ARIA_LABEL_LIST_MULTISELECTABLE:LE,ARIA_LABEL_LIST_DELETABLE:NE,MESSAGE_STRIP_CLOSE_BUTTON:SE,MESSAGE_STRIP_CLOSABLE:CE,MESSAGE_STRIP_ERROR:DE,MESSAGE_STRIP_WARNING:PE,MESSAGE_STRIP_SUCCESS:BE,MESSAGE_STRIP_INFORMATION:UE,MULTICOMBOBOX_DIALOG_OK_BUTTON:tE,VALUE_STATE_ERROR_ALREADY_SELECTED:sE,MULTIINPUT_ROLEDESCRIPTION_TEXT:nE,MULTIINPUT_SHOW_MORE_TOKENS:oE,PANEL_ICON:cE,RANGE_SLIDER_ARIA_DESCRIPTION:ME,RANGE_SLIDER_START_HANDLE_DESCRIPTION:GE,RANGE_SLIDER_END_HANDLE_DESCRIPTION:KE,RATING_INDICATOR_TOOLTIP_TEXT:VE,RATING_INDICATOR_TEXT:HE,RATING_INDICATOR_ARIA_DESCRIPTION:XE,RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON:YE,SEGMENTEDBUTTON_ARIA_DESCRIPTION:WE,SEGMENTEDBUTTON_ARIA_DESCRIBEDBY:FE,SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION:ZE,SLIDER_ARIA_DESCRIPTION:eE,LOAD_MORE_TEXT:aE,TABLE_HEADER_ROW_INFORMATION:fE,TABLE_ROW_POSITION:lE,TABLE_GROUP_ROW_ARIA_LABEL:uE,ARIA_LABEL_ROW_SELECTION:dE,ARIA_LABEL_SELECT_ALL_CHECKBOX:hE,ARIA_LABEL_EMPTY_CELL:iE,TAB_ARIA_DESIGN_POSITIVE:rE,TAB_ARIA_DESIGN_NEGATIVE:JE,TAB_ARIA_DESIGN_CRITICAL:bE,TAB_ARIA_DESIGN_NEUTRAL:gE,TAB_SPLIT_ROLE_DESCRIPTION:kE,TABCONTAINER_NEXT_ICON_ACC_NAME:mE,TABCONTAINER_PREVIOUS_ICON_ACC_NAME:pE,TABCONTAINER_OVERFLOW_MENU_TITLE:xE,TABCONTAINER_END_OVERFLOW:jE,TABCONTAINER_POPOVER_CANCEL_BUTTON:qE,TABCONTAINER_SUBTABS_DESCRIPTION:vE,TEXTAREA_CHARACTERS_LEFT:wE,TEXTAREA_CHARACTERS_EXCEEDED:yE,TIMEPICKER_HOURS_LABEL:zE,TIMEPICKER_MINUTES_LABEL:QE,TIMEPICKER_SECONDS_LABEL:$E,TIMEPICKER_SUBMIT_BUTTON:E_,TIMEPICKER_CANCEL_BUTTON:__,TIMEPICKER_INPUT_DESCRIPTION:T_,TIMEPICKER_CLOCK_DIAL_LABEL:A_,DURATION_INPUT_DESCRIPTION:I_,DATETIME_PICKER_DATE_BUTTON:R_,DATETIME_PICKER_TIME_BUTTON:O_,TOKEN_ARIA_DELETABLE:L_,TOKENIZER_ARIA_CONTAIN_TOKEN:N_,TOKENIZER_ARIA_CONTAIN_ONE_TOKEN:S_,TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS:C_,TOKENIZER_ARIA_LABEL:D_,TOKENIZER_POPOVER_REMOVE:P_,TREE_ITEM_ARIA_LABEL:B_,TREE_ITEM_EXPAND_NODE:U_,TREE_ITEM_COLLAPSE_NODE:t_,VALUE_STATE_TYPE_ERROR:s_,VALUE_STATE_TYPE_WARNING:n_,VALUE_STATE_TYPE_SUCCESS:o_,VALUE_STATE_TYPE_INFORMATION:c_,VALUE_STATE_ERROR:M_,VALUE_STATE_WARNING:G_,VALUE_STATE_INFORMATION:K_,VALUE_STATE_SUCCESS:V_,CALENDAR_HEADER_NEXT_BUTTON:H_,CALENDAR_HEADER_PREVIOUS_BUTTON:X_,DAY_PICKER_WEEK_NUMBER_TEXT:Y_,DAY_PICKER_NON_WORKING_DAY:W_,DAY_PICKER_TODAY:F_,MONTH_PICKER_DESCRIPTION:Z_,YEAR_PICKER_DESCRIPTION:e_,STEPINPUT_DEC_ICON_TITLE:a_,STEPINPUT_INC_ICON_TITLE:f_,SPLIT_BUTTON_DESCRIPTION:l_,SPLIT_BUTTON_KEYBOARD_HINT:u_,MENU_BACK_BUTTON_ARIA_LABEL:d_,MENU_CLOSE_BUTTON_ARIA_LABEL:h_,DIALOG_HEADER_ARIA_ROLE_DESCRIPTION:i_,DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE:r_,DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE:J_,DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE:b_,LABEL_COLON:g_};export{E as ARIA_LABEL_CARD_CONTENT,iE as ARIA_LABEL_EMPTY_CELL,NE as ARIA_LABEL_LIST_DELETABLE,IE as ARIA_LABEL_LIST_ITEM_CHECKBOX,RE as ARIA_LABEL_LIST_ITEM_RADIO_BUTTON,LE as ARIA_LABEL_LIST_MULTISELECTABLE,OE as ARIA_LABEL_LIST_SELECTABLE,dE as ARIA_LABEL_ROW_SELECTION,hE as ARIA_LABEL_SELECT_ALL_CHECKBOX,_ as ARIA_ROLEDESCRIPTION_CARD,T as ARIA_ROLEDESCRIPTION_CARD_HEADER,A as ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER,N as AVATAR_GROUP_ARIA_LABEL_GROUP,L as AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL,R as AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL,S as AVATAR_GROUP_MOVE,O as AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL,I as AVATAR_TOOLTIP,C as BADGE_DESCRIPTION,P as BREADCRUMBS_ARIA_LABEL,U as BREADCRUMBS_CANCEL_BUTTON,B as BREADCRUMBS_OVERFLOW_ARIA_LABEL,D as BREADCRUMB_ITEM_POS,t as BUSY_INDICATOR_TITLE,s as BUTTON_ARIA_TYPE_ACCEPT,o as BUTTON_ARIA_TYPE_EMPHASIZED,n as BUTTON_ARIA_TYPE_REJECT,H_ as CALENDAR_HEADER_NEXT_BUTTON,X_ as CALENDAR_HEADER_PREVIOUS_BUTTON,M as CAROUSEL_DOT_TEXT,K as CAROUSEL_NEXT_ARROW_TEXT,c as CAROUSEL_OF_TEXT,G as CAROUSEL_PREVIOUS_ARROW_TEXT,X as COLORPALETTE_COLOR_LABEL,V as COLORPALETTE_CONTAINER_LABEL,H as COLORPALETTE_POPOVER_TITLE,h as COLORPICKER_ALPHA,e as COLORPICKER_ALPHA_SLIDER,d as COLORPICKER_BLUE,u as COLORPICKER_GREEN,f as COLORPICKER_HEX,a as COLORPICKER_HUE_SLIDER,l as COLORPICKER_RED,Y as COLOR_PALETTE_DIALOG_CANCEL_BUTTON,W as COLOR_PALETTE_DIALOG_OK_BUTTON,F as COLOR_PALETTE_DIALOG_TITLE,Z as COLOR_PALETTE_MORE_COLORS_TEXT,r as DATEPICKER_DATE_DESCRIPTION,i as DATEPICKER_OPEN_ICON_TITLE,b as DATERANGE_DESCRIPTION,J as DATETIME_DESCRIPTION,R_ as DATETIME_PICKER_DATE_BUTTON,O_ as DATETIME_PICKER_TIME_BUTTON,W_ as DAY_PICKER_NON_WORKING_DAY,F_ as DAY_PICKER_TODAY,Y_ as DAY_PICKER_WEEK_NUMBER_TEXT,g as DELETE,J_ as DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE,b_ as DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE,r_ as DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE,i_ as DIALOG_HEADER_ARIA_ROLE_DESCRIPTION,I_ as DURATION_INPUT_DESCRIPTION,m as FILEUPLOADER_TITLE,k as FILEUPLOAD_BROWSE,p as GROUP_HEADER_TEXT,q as INPUT_SUGGESTIONS,y as INPUT_SUGGESTIONS_MORE_HITS,z as INPUT_SUGGESTIONS_NO_HIT,w as INPUT_SUGGESTIONS_ONE_HIT,v as INPUT_SUGGESTIONS_TITLE,g_ as LABEL_COLON,$ as LINK_EMPHASIZED,Q as LINK_SUBTLE,AE as LIST_ITEM_GROUP_HEADER,TE as LIST_ITEM_NOT_SELECTED,EE as LIST_ITEM_POSITION,_E as LIST_ITEM_SELECTED,aE as LOAD_MORE_TEXT,d_ as MENU_BACK_BUTTON_ARIA_LABEL,h_ as MENU_CLOSE_BUTTON_ARIA_LABEL,CE as MESSAGE_STRIP_CLOSABLE,SE as MESSAGE_STRIP_CLOSE_BUTTON,DE as MESSAGE_STRIP_ERROR,UE as MESSAGE_STRIP_INFORMATION,BE as MESSAGE_STRIP_SUCCESS,PE as MESSAGE_STRIP_WARNING,Z_ as MONTH_PICKER_DESCRIPTION,tE as MULTICOMBOBOX_DIALOG_OK_BUTTON,nE as MULTIINPUT_ROLEDESCRIPTION_TEXT,oE as MULTIINPUT_SHOW_MORE_TOKENS,cE as PANEL_ICON,ME as RANGE_SLIDER_ARIA_DESCRIPTION,KE as RANGE_SLIDER_END_HANDLE_DESCRIPTION,GE as RANGE_SLIDER_START_HANDLE_DESCRIPTION,XE as RATING_INDICATOR_ARIA_DESCRIPTION,HE as RATING_INDICATOR_TEXT,VE as RATING_INDICATOR_TOOLTIP_TEXT,YE as RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON,ZE as SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION,FE as SEGMENTEDBUTTON_ARIA_DESCRIBEDBY,WE as SEGMENTEDBUTTON_ARIA_DESCRIPTION,j as SELECT_OPTIONS,x as SELECT_ROLE_DESCRIPTION,eE as SLIDER_ARIA_DESCRIPTION,l_ as SPLIT_BUTTON_DESCRIPTION,u_ as SPLIT_BUTTON_KEYBOARD_HINT,a_ as STEPINPUT_DEC_ICON_TITLE,f_ as STEPINPUT_INC_ICON_TITLE,jE as TABCONTAINER_END_OVERFLOW,mE as TABCONTAINER_NEXT_ICON_ACC_NAME,xE as TABCONTAINER_OVERFLOW_MENU_TITLE,qE as TABCONTAINER_POPOVER_CANCEL_BUTTON,pE as TABCONTAINER_PREVIOUS_ICON_ACC_NAME,vE as TABCONTAINER_SUBTABS_DESCRIPTION,uE as TABLE_GROUP_ROW_ARIA_LABEL,fE as TABLE_HEADER_ROW_INFORMATION,lE as TABLE_ROW_POSITION,bE as TAB_ARIA_DESIGN_CRITICAL,JE as TAB_ARIA_DESIGN_NEGATIVE,gE as TAB_ARIA_DESIGN_NEUTRAL,rE as TAB_ARIA_DESIGN_POSITIVE,kE as TAB_SPLIT_ROLE_DESCRIPTION,yE as TEXTAREA_CHARACTERS_EXCEEDED,wE as TEXTAREA_CHARACTERS_LEFT,__ as TIMEPICKER_CANCEL_BUTTON,A_ as TIMEPICKER_CLOCK_DIAL_LABEL,zE as TIMEPICKER_HOURS_LABEL,T_ as TIMEPICKER_INPUT_DESCRIPTION,QE as TIMEPICKER_MINUTES_LABEL,$E as TIMEPICKER_SECONDS_LABEL,E_ as TIMEPICKER_SUBMIT_BUTTON,S_ as TOKENIZER_ARIA_CONTAIN_ONE_TOKEN,C_ as TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS,N_ as TOKENIZER_ARIA_CONTAIN_TOKEN,D_ as TOKENIZER_ARIA_LABEL,P_ as TOKENIZER_POPOVER_REMOVE,L_ as TOKEN_ARIA_DELETABLE,B_ as TREE_ITEM_ARIA_LABEL,t_ as TREE_ITEM_COLLAPSE_NODE,U_ as TREE_ITEM_EXPAND_NODE,M_ as VALUE_STATE_ERROR,sE as VALUE_STATE_ERROR_ALREADY_SELECTED,K_ as VALUE_STATE_INFORMATION,V_ as VALUE_STATE_SUCCESS,s_ as VALUE_STATE_TYPE_ERROR,c_ as VALUE_STATE_TYPE_INFORMATION,o_ as VALUE_STATE_TYPE_SUCCESS,n_ as VALUE_STATE_TYPE_WARNING,G_ as VALUE_STATE_WARNING,e_ as YEAR_PICKER_DESCRIPTION,k_ as default};
