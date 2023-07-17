const E="\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u043A\u0430\u0440\u0442\u044B",_="\u041A\u0430\u0440\u0442\u0430",T="\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043A\u0430\u0440\u0442\u044B",A="\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0439 \u043A\u0430\u0440\u0442\u044B",I="\u0410\u0432\u0430\u0442\u0430\u0440",R="{0} \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F, {1} \u0441\u043A\u0440\u044B\u0442\u043E.",O="\u0410\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u044F \u0434\u043B\u044F \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430.",L="\u041E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u0430\u0432\u0430\u0442\u0430\u0440\u044B.",N="\u0421\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0430\u0432\u0430\u0442\u0430\u0440\u044B.",S="\u0414\u043B\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438 \u0441\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u0430\u043C\u0438.",C="\u0411\u0435\u0439\u0434\u0436",D="{0} \u0438\u0437 {1}",P="\u041F\u0443\u0442\u044C \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438",B="\u0411\u043E\u043B\u044C\u0448\u0435",U="\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",t="\u041F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435",n="\u041F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F",s="\u041E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F",o="\u0412\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u0430\u044F",c="\u0438\u0437",M="\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F \u044D\u043B\u0435\u043C\u0435\u043D\u0442 {0} \u0438\u0437 {1}",G="\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430",K="\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430",V="\u0426\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430 \u2013 \u043F\u0440\u0435\u0434\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430",H="\u0426\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430",X="\u0426\u0432\u0435\u0442",Y="\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",W="\u041E\u041A",F="\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0446\u0432\u0435\u0442",Z="\u0411\u043E\u043B\u044C\u0448\u0435 \u0446\u0432\u0435\u0442\u043E\u0432...",e="\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0430\u043B\u044C\u0444\u0430",r="\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043E\u0442\u0442\u0435\u043D\u043A\u0430",a="\u0428\u0435\u0441\u0442\u043D\u0430\u0434\u0446\u0430\u0442\u0435\u0440\u0438\u0447\u043D\u043E\u0435",f="\u041A\u0440\u0430\u0441\u043D\u044B\u0439",l="\u0417\u0435\u043B\u0435\u043D\u044B\u0439",u="\u0421\u0438\u043D\u0438\u0439",d="\u0410\u043B\u044C\u0444\u0430",h="\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E \u0432\u044B\u0431\u043E\u0440\u0430",i="\u0412\u0432\u043E\u0434 \u0434\u0430\u0442\u044B",J="\u0412\u0432\u043E\u0434 \u0434\u0430\u0442\u044B \u0438 \u0432\u0440\u0435\u043C\u0435\u043D\u0438",b="\u0412\u0432\u043E\u0434 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430 \u0434\u0430\u0442",g="\u0423\u0434\u0430\u043B\u0438\u0442\u044C",m="\u041E\u0431\u0437\u043E\u0440...",p="\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B",x="\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0433\u0440\u0443\u043F\u043F\u044B",j="\u041F\u043E\u043B\u0435 \u0441\u043E \u0441\u043F\u0438\u0441\u043A\u043E\u043C",k="\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043E\u043F\u0446\u0438\u0438",q="\u0415\u0441\u0442\u044C \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F",v="\u0412\u044B\u0431\u0440\u0430\u0442\u044C",w="\u0414\u043E\u0441\u0442\u0443\u043F\u0435\u043D 1 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",y="\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432: {0}",z="\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432",Q="\u041D\u0435\u0437\u0430\u043C\u0435\u0442\u043D\u0430\u044F",$="\u0412\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u0430\u044F",EE="\u041F\u043E\u0437\u0438\u0446\u0438\u044F \u0441\u043F\u0438\u0441\u043A\u0430 {0} \u0438\u0437 {1}",_E="\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435",TE="\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E",AE="\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0433\u0440\u0443\u043F\u043F\u044B",IE="\u0420\u0435\u0436\u0438\u043C \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0432\u044B\u0431\u043E\u0440\u0430",RE="\u0412\u044B\u0431\u043E\u0440 \u043F\u043E\u0437\u0438\u0446\u0438\u0438",OE="\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0441 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C\u044E \u0432\u044B\u0431\u043E\u0440\u0430",LE="\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0441 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C\u044E \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0432\u044B\u0431\u043E\u0440\u0430",NE="\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0441 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C\u044E \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F",SE="\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 - \u0417\u0430\u043A\u0440\u044B\u0442\u044C",CE="\u041C\u043E\u0436\u043D\u043E \u0437\u0430\u043A\u0440\u044B\u0442\u044C",DE="\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 - \u041E\u0448\u0438\u0431\u043A\u0430",PE="\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 - \u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435",BE="\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 - \u0423\u0441\u043F\u0435\u0448\u043D\u043E",UE="\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430",tE="\u041E\u041A",nE="\u042D\u0442\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0443\u0436\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E.",sE="\u0412\u0432\u043E\u0434 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439",oE="\u0415\u0449\u0435 {0}",cE="\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C/\u0441\u0432\u0435\u0440\u043D\u0443\u0442\u044C",ME="\u0414\u0438\u0430\u043F\u0430\u0437\u043E\u043D",GE="\u041F\u043E\u043B\u043E\u0441\u0430 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438 \u0441\u043B\u0435\u0432\u0430",KE="\u041F\u043E\u043B\u043E\u0441\u0430 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438 \u0441\u043F\u0440\u0430\u0432\u0430",VE="\u041E\u0446\u0435\u043D\u043A\u0430",HE="\u0417\u0432\u0435\u0437\u0434\u044B \u043E\u0446\u0435\u043D\u043A\u0438",XE="\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E",YE="\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C",WE="\u0413\u0440\u0443\u043F\u043F\u0430 \u0441\u0435\u0433\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043A\u043D\u043E\u043F\u043E\u043A",FE="\u0414\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043F\u0440\u043E\u0431\u0435\u043B \u0438\u043B\u0438 Enter",ZE="\u0421\u0435\u0433\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430",eE="\u041F\u043E\u043B\u0437\u0443\u043D\u043E\u043A",rE="\u0411\u043E\u043B\u044C\u0448\u0435",aE="\u0421\u0442\u0440\u043E\u043A\u0430 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430 1 \u0438\u0437 {0}",fE="{0} \u0438\u0437 {1}",lE="\u0421\u0442\u0440\u043E\u043A\u0430 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430 \u0433\u0440\u0443\u043F\u043F\u044B",uE="\u0412\u044B\u0431\u043E\u0440 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",dE="\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435 \u0441\u0442\u0440\u043E\u043A\u0438",hE="\u041F\u0443\u0441\u0442\u043E",iE="\u041F\u043E\u043B\u043E\u0436\u0438\u0442.",JE="\u041E\u0442\u0440\u0438\u0446\u0430\u0442.",bE="\u041A\u0440\u0438\u0442\u0438\u0447.",gE="\u041D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D.",mE="\u0412\u043A\u043B\u0430\u0434\u043A\u0430 \u0441 \u043F\u043E\u0434\u0447\u0438\u043D\u0435\u043D\u043D\u044B\u043C\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438",pE="\u0414\u0430\u043B\u044C\u0448\u0435",xE="\u041D\u0430\u0437\u0430\u0434",jE="\u041C\u0435\u043D\u044E \u043F\u0435\u0440\u0435\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F",kE="\u0411\u043E\u043B\u044C\u0448\u0435",qE="\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",vE="\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0443 \u0441\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u043E\u0439 \u0432\u043D\u0438\u0437, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E \u043F\u043E\u0434\u0447\u0438\u043D\u0435\u043D\u043D\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",wE="\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432: {0}",yE="\u0421\u0438\u043C\u0432\u043E\u043B\u043E\u0432 \u0441\u0432\u044B\u0448\u0435 \u043B\u0438\u043C\u0438\u0442\u0430: {0}",zE="\u0427\u0430\u0441\u044B",QE="\u041C\u0438\u043D\u0443\u0442\u044B",$E="\u0421\u0435\u043A\u0443\u043D\u0434\u044B",E_="\u041E\u041A",__="\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",T_="\u0412\u0432\u043E\u0434 \u0432\u0440\u0435\u043C\u0435\u043D\u0438",A_="\u0426\u0438\u0444\u0435\u0440\u0431\u043B\u0430\u0442",I_="\u0412\u0432\u043E\u0434 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",R_="\u0414\u0430\u0442\u0430",O_="\u0412\u0440\u0435\u043C\u044F",L_="\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435",N_="\u041D\u0435\u0442 \u043C\u0430\u0440\u043A\u0435\u0440\u043E\u0432",S_="\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u0442 1 \u043C\u0430\u0440\u043A\u0435\u0440",C_="\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043C\u0430\u0440\u043A\u0435\u0440\u044B: {0}",D_="\u0413\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u043C\u0430\u0440\u043A\u0435\u0440\u043E\u0432",P_="\u0423\u0434\u0430\u043B\u0438\u0442\u044C",B_="\u041F\u043E\u0437\u0438\u0446\u0438\u044F \u0434\u0435\u0440\u0435\u0432\u0430",U_="\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0443\u0437\u0435\u043B",t_="\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0443\u0437\u0435\u043B",n_='\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F "\u041E\u0448\u0438\u0431\u043A\u0430"',s_='\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F "\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435"',o_='\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F "\u0423\u0441\u043F\u0435\u0448\u043D\u043E"',c_='\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"',M_="\u041D\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0432\u0432\u043E\u0434",G_="\u0412\u044B\u0434\u0430\u043D\u043E \u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435",K_="\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C",V_="\u0417\u0430\u043F\u0438\u0441\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0432\u0430\u043B\u0438\u0434\u0438\u0440\u043E\u0432\u0430\u043D\u0430",H_="\u0414\u0430\u043B\u044C\u0448\u0435",X_="\u041D\u0430\u0437\u0430\u0434",Y_="\u041D\u043E\u043C\u0435\u0440 \u043D\u0435\u0434\u0435\u043B\u0438",W_="\u041D\u0435\u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0434\u0435\u043D\u044C",F_="\u0421\u0435\u0433\u043E\u0434\u043D\u044F",Z_="\u0412\u044B\u0431\u043E\u0440 \u043C\u0435\u0441\u044F\u0446\u0430",e_="\u0412\u044B\u0431\u043E\u0440 \u0433\u043E\u0434\u0430",r_="\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C",a_="\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C",f_="\u0420\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u043D\u0430\u044F \u043D\u0430 \u0434\u0432\u0435 \u0447\u0430\u0441\u0442\u0438 \u043A\u043D\u043E\u043F\u043A\u0430",l_="\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043F\u0440\u043E\u0431\u0435\u043B \u0438\u043B\u0438 Enter, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E, \u0438 Alt + \u043A\u043B\u0430\u0432\u0438\u0448\u0443 \u0441\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u043E\u0439 \u0432\u043D\u0438\u0437 \u0438\u043B\u0438 F4, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E \u0441\u0442\u0440\u0435\u043B\u043A\u0438",u_="\u041D\u0430\u0437\u0430\u0434",d_="\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C",h_="\u0418\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",i_="\u0414\u043B\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 Shift+\u043A\u043B\u0430\u0432\u0438\u0448\u0438 \u0441\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u0430\u043C\u0438",J_="\u0414\u043B\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438 \u0441\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u0430\u043C\u0438",b_="\u0414\u043B\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438 \u0441\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u0430\u043C\u0438, \u0434\u043B\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 Shift+\u043A\u043B\u0430\u0432\u0438\u0448\u0438 \u0441\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u0430\u043C\u0438",g_=":",m_={ARIA_LABEL_CARD_CONTENT:E,ARIA_ROLEDESCRIPTION_CARD:_,ARIA_ROLEDESCRIPTION_CARD_HEADER:T,ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER:A,AVATAR_TOOLTIP:I,AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL:R,AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL:O,AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL:L,AVATAR_GROUP_ARIA_LABEL_GROUP:N,AVATAR_GROUP_MOVE:S,BADGE_DESCRIPTION:C,BREADCRUMB_ITEM_POS:D,BREADCRUMBS_ARIA_LABEL:P,BREADCRUMBS_OVERFLOW_ARIA_LABEL:B,BREADCRUMBS_CANCEL_BUTTON:U,BUSY_INDICATOR_TITLE:t,BUTTON_ARIA_TYPE_ACCEPT:n,BUTTON_ARIA_TYPE_REJECT:s,BUTTON_ARIA_TYPE_EMPHASIZED:o,CAROUSEL_OF_TEXT:c,CAROUSEL_DOT_TEXT:M,CAROUSEL_PREVIOUS_ARROW_TEXT:G,CAROUSEL_NEXT_ARROW_TEXT:K,COLORPALETTE_CONTAINER_LABEL:V,COLORPALETTE_POPOVER_TITLE:H,COLORPALETTE_COLOR_LABEL:X,COLOR_PALETTE_DIALOG_CANCEL_BUTTON:Y,COLOR_PALETTE_DIALOG_OK_BUTTON:W,COLOR_PALETTE_DIALOG_TITLE:F,COLOR_PALETTE_MORE_COLORS_TEXT:Z,COLORPICKER_ALPHA_SLIDER:e,COLORPICKER_HUE_SLIDER:r,COLORPICKER_HEX:a,COLORPICKER_RED:f,COLORPICKER_GREEN:l,COLORPICKER_BLUE:u,COLORPICKER_ALPHA:d,DATEPICKER_OPEN_ICON_TITLE:h,DATEPICKER_DATE_DESCRIPTION:i,DATETIME_DESCRIPTION:J,DATERANGE_DESCRIPTION:b,DELETE:g,FILEUPLOAD_BROWSE:m,FILEUPLOADER_TITLE:p,GROUP_HEADER_TEXT:x,SELECT_ROLE_DESCRIPTION:j,SELECT_OPTIONS:k,INPUT_SUGGESTIONS:q,INPUT_SUGGESTIONS_TITLE:v,INPUT_SUGGESTIONS_ONE_HIT:w,INPUT_SUGGESTIONS_MORE_HITS:y,INPUT_SUGGESTIONS_NO_HIT:z,LINK_SUBTLE:Q,LINK_EMPHASIZED:$,LIST_ITEM_POSITION:EE,LIST_ITEM_SELECTED:_E,LIST_ITEM_NOT_SELECTED:TE,LIST_ITEM_GROUP_HEADER:AE,ARIA_LABEL_LIST_ITEM_CHECKBOX:IE,ARIA_LABEL_LIST_ITEM_RADIO_BUTTON:RE,ARIA_LABEL_LIST_SELECTABLE:OE,ARIA_LABEL_LIST_MULTISELECTABLE:LE,ARIA_LABEL_LIST_DELETABLE:NE,MESSAGE_STRIP_CLOSE_BUTTON:SE,MESSAGE_STRIP_CLOSABLE:CE,MESSAGE_STRIP_ERROR:DE,MESSAGE_STRIP_WARNING:PE,MESSAGE_STRIP_SUCCESS:BE,MESSAGE_STRIP_INFORMATION:UE,MULTICOMBOBOX_DIALOG_OK_BUTTON:tE,VALUE_STATE_ERROR_ALREADY_SELECTED:nE,MULTIINPUT_ROLEDESCRIPTION_TEXT:sE,MULTIINPUT_SHOW_MORE_TOKENS:oE,PANEL_ICON:cE,RANGE_SLIDER_ARIA_DESCRIPTION:ME,RANGE_SLIDER_START_HANDLE_DESCRIPTION:GE,RANGE_SLIDER_END_HANDLE_DESCRIPTION:KE,RATING_INDICATOR_TOOLTIP_TEXT:VE,RATING_INDICATOR_TEXT:HE,RATING_INDICATOR_ARIA_DESCRIPTION:XE,RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON:YE,SEGMENTEDBUTTON_ARIA_DESCRIPTION:WE,SEGMENTEDBUTTON_ARIA_DESCRIBEDBY:FE,SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION:ZE,SLIDER_ARIA_DESCRIPTION:eE,LOAD_MORE_TEXT:rE,TABLE_HEADER_ROW_INFORMATION:aE,TABLE_ROW_POSITION:fE,TABLE_GROUP_ROW_ARIA_LABEL:lE,ARIA_LABEL_ROW_SELECTION:uE,ARIA_LABEL_SELECT_ALL_CHECKBOX:dE,ARIA_LABEL_EMPTY_CELL:hE,TAB_ARIA_DESIGN_POSITIVE:iE,TAB_ARIA_DESIGN_NEGATIVE:JE,TAB_ARIA_DESIGN_CRITICAL:bE,TAB_ARIA_DESIGN_NEUTRAL:gE,TAB_SPLIT_ROLE_DESCRIPTION:mE,TABCONTAINER_NEXT_ICON_ACC_NAME:pE,TABCONTAINER_PREVIOUS_ICON_ACC_NAME:xE,TABCONTAINER_OVERFLOW_MENU_TITLE:jE,TABCONTAINER_END_OVERFLOW:kE,TABCONTAINER_POPOVER_CANCEL_BUTTON:qE,TABCONTAINER_SUBTABS_DESCRIPTION:vE,TEXTAREA_CHARACTERS_LEFT:wE,TEXTAREA_CHARACTERS_EXCEEDED:yE,TIMEPICKER_HOURS_LABEL:zE,TIMEPICKER_MINUTES_LABEL:QE,TIMEPICKER_SECONDS_LABEL:$E,TIMEPICKER_SUBMIT_BUTTON:E_,TIMEPICKER_CANCEL_BUTTON:__,TIMEPICKER_INPUT_DESCRIPTION:T_,TIMEPICKER_CLOCK_DIAL_LABEL:A_,DURATION_INPUT_DESCRIPTION:I_,DATETIME_PICKER_DATE_BUTTON:R_,DATETIME_PICKER_TIME_BUTTON:O_,TOKEN_ARIA_DELETABLE:L_,TOKENIZER_ARIA_CONTAIN_TOKEN:N_,TOKENIZER_ARIA_CONTAIN_ONE_TOKEN:S_,TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS:C_,TOKENIZER_ARIA_LABEL:D_,TOKENIZER_POPOVER_REMOVE:P_,TREE_ITEM_ARIA_LABEL:B_,TREE_ITEM_EXPAND_NODE:U_,TREE_ITEM_COLLAPSE_NODE:t_,VALUE_STATE_TYPE_ERROR:n_,VALUE_STATE_TYPE_WARNING:s_,VALUE_STATE_TYPE_SUCCESS:o_,VALUE_STATE_TYPE_INFORMATION:c_,VALUE_STATE_ERROR:M_,VALUE_STATE_WARNING:G_,VALUE_STATE_INFORMATION:K_,VALUE_STATE_SUCCESS:V_,CALENDAR_HEADER_NEXT_BUTTON:H_,CALENDAR_HEADER_PREVIOUS_BUTTON:X_,DAY_PICKER_WEEK_NUMBER_TEXT:Y_,DAY_PICKER_NON_WORKING_DAY:W_,DAY_PICKER_TODAY:F_,MONTH_PICKER_DESCRIPTION:Z_,YEAR_PICKER_DESCRIPTION:e_,STEPINPUT_DEC_ICON_TITLE:r_,STEPINPUT_INC_ICON_TITLE:a_,SPLIT_BUTTON_DESCRIPTION:f_,SPLIT_BUTTON_KEYBOARD_HINT:l_,MENU_BACK_BUTTON_ARIA_LABEL:u_,MENU_CLOSE_BUTTON_ARIA_LABEL:d_,DIALOG_HEADER_ARIA_ROLE_DESCRIPTION:h_,DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE:i_,DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE:J_,DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE:b_,LABEL_COLON:g_};export{E as ARIA_LABEL_CARD_CONTENT,hE as ARIA_LABEL_EMPTY_CELL,NE as ARIA_LABEL_LIST_DELETABLE,IE as ARIA_LABEL_LIST_ITEM_CHECKBOX,RE as ARIA_LABEL_LIST_ITEM_RADIO_BUTTON,LE as ARIA_LABEL_LIST_MULTISELECTABLE,OE as ARIA_LABEL_LIST_SELECTABLE,uE as ARIA_LABEL_ROW_SELECTION,dE as ARIA_LABEL_SELECT_ALL_CHECKBOX,_ as ARIA_ROLEDESCRIPTION_CARD,T as ARIA_ROLEDESCRIPTION_CARD_HEADER,A as ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER,N as AVATAR_GROUP_ARIA_LABEL_GROUP,L as AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL,R as AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL,S as AVATAR_GROUP_MOVE,O as AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL,I as AVATAR_TOOLTIP,C as BADGE_DESCRIPTION,P as BREADCRUMBS_ARIA_LABEL,U as BREADCRUMBS_CANCEL_BUTTON,B as BREADCRUMBS_OVERFLOW_ARIA_LABEL,D as BREADCRUMB_ITEM_POS,t as BUSY_INDICATOR_TITLE,n as BUTTON_ARIA_TYPE_ACCEPT,o as BUTTON_ARIA_TYPE_EMPHASIZED,s as BUTTON_ARIA_TYPE_REJECT,H_ as CALENDAR_HEADER_NEXT_BUTTON,X_ as CALENDAR_HEADER_PREVIOUS_BUTTON,M as CAROUSEL_DOT_TEXT,K as CAROUSEL_NEXT_ARROW_TEXT,c as CAROUSEL_OF_TEXT,G as CAROUSEL_PREVIOUS_ARROW_TEXT,X as COLORPALETTE_COLOR_LABEL,V as COLORPALETTE_CONTAINER_LABEL,H as COLORPALETTE_POPOVER_TITLE,d as COLORPICKER_ALPHA,e as COLORPICKER_ALPHA_SLIDER,u as COLORPICKER_BLUE,l as COLORPICKER_GREEN,a as COLORPICKER_HEX,r as COLORPICKER_HUE_SLIDER,f as COLORPICKER_RED,Y as COLOR_PALETTE_DIALOG_CANCEL_BUTTON,W as COLOR_PALETTE_DIALOG_OK_BUTTON,F as COLOR_PALETTE_DIALOG_TITLE,Z as COLOR_PALETTE_MORE_COLORS_TEXT,i as DATEPICKER_DATE_DESCRIPTION,h as DATEPICKER_OPEN_ICON_TITLE,b as DATERANGE_DESCRIPTION,J as DATETIME_DESCRIPTION,R_ as DATETIME_PICKER_DATE_BUTTON,O_ as DATETIME_PICKER_TIME_BUTTON,W_ as DAY_PICKER_NON_WORKING_DAY,F_ as DAY_PICKER_TODAY,Y_ as DAY_PICKER_WEEK_NUMBER_TEXT,g as DELETE,J_ as DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE,b_ as DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE,i_ as DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE,h_ as DIALOG_HEADER_ARIA_ROLE_DESCRIPTION,I_ as DURATION_INPUT_DESCRIPTION,p as FILEUPLOADER_TITLE,m as FILEUPLOAD_BROWSE,x as GROUP_HEADER_TEXT,q as INPUT_SUGGESTIONS,y as INPUT_SUGGESTIONS_MORE_HITS,z as INPUT_SUGGESTIONS_NO_HIT,w as INPUT_SUGGESTIONS_ONE_HIT,v as INPUT_SUGGESTIONS_TITLE,g_ as LABEL_COLON,$ as LINK_EMPHASIZED,Q as LINK_SUBTLE,AE as LIST_ITEM_GROUP_HEADER,TE as LIST_ITEM_NOT_SELECTED,EE as LIST_ITEM_POSITION,_E as LIST_ITEM_SELECTED,rE as LOAD_MORE_TEXT,u_ as MENU_BACK_BUTTON_ARIA_LABEL,d_ as MENU_CLOSE_BUTTON_ARIA_LABEL,CE as MESSAGE_STRIP_CLOSABLE,SE as MESSAGE_STRIP_CLOSE_BUTTON,DE as MESSAGE_STRIP_ERROR,UE as MESSAGE_STRIP_INFORMATION,BE as MESSAGE_STRIP_SUCCESS,PE as MESSAGE_STRIP_WARNING,Z_ as MONTH_PICKER_DESCRIPTION,tE as MULTICOMBOBOX_DIALOG_OK_BUTTON,sE as MULTIINPUT_ROLEDESCRIPTION_TEXT,oE as MULTIINPUT_SHOW_MORE_TOKENS,cE as PANEL_ICON,ME as RANGE_SLIDER_ARIA_DESCRIPTION,KE as RANGE_SLIDER_END_HANDLE_DESCRIPTION,GE as RANGE_SLIDER_START_HANDLE_DESCRIPTION,XE as RATING_INDICATOR_ARIA_DESCRIPTION,HE as RATING_INDICATOR_TEXT,VE as RATING_INDICATOR_TOOLTIP_TEXT,YE as RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON,ZE as SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION,FE as SEGMENTEDBUTTON_ARIA_DESCRIBEDBY,WE as SEGMENTEDBUTTON_ARIA_DESCRIPTION,k as SELECT_OPTIONS,j as SELECT_ROLE_DESCRIPTION,eE as SLIDER_ARIA_DESCRIPTION,f_ as SPLIT_BUTTON_DESCRIPTION,l_ as SPLIT_BUTTON_KEYBOARD_HINT,r_ as STEPINPUT_DEC_ICON_TITLE,a_ as STEPINPUT_INC_ICON_TITLE,kE as TABCONTAINER_END_OVERFLOW,pE as TABCONTAINER_NEXT_ICON_ACC_NAME,jE as TABCONTAINER_OVERFLOW_MENU_TITLE,qE as TABCONTAINER_POPOVER_CANCEL_BUTTON,xE as TABCONTAINER_PREVIOUS_ICON_ACC_NAME,vE as TABCONTAINER_SUBTABS_DESCRIPTION,lE as TABLE_GROUP_ROW_ARIA_LABEL,aE as TABLE_HEADER_ROW_INFORMATION,fE as TABLE_ROW_POSITION,bE as TAB_ARIA_DESIGN_CRITICAL,JE as TAB_ARIA_DESIGN_NEGATIVE,gE as TAB_ARIA_DESIGN_NEUTRAL,iE as TAB_ARIA_DESIGN_POSITIVE,mE as TAB_SPLIT_ROLE_DESCRIPTION,yE as TEXTAREA_CHARACTERS_EXCEEDED,wE as TEXTAREA_CHARACTERS_LEFT,__ as TIMEPICKER_CANCEL_BUTTON,A_ as TIMEPICKER_CLOCK_DIAL_LABEL,zE as TIMEPICKER_HOURS_LABEL,T_ as TIMEPICKER_INPUT_DESCRIPTION,QE as TIMEPICKER_MINUTES_LABEL,$E as TIMEPICKER_SECONDS_LABEL,E_ as TIMEPICKER_SUBMIT_BUTTON,S_ as TOKENIZER_ARIA_CONTAIN_ONE_TOKEN,C_ as TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS,N_ as TOKENIZER_ARIA_CONTAIN_TOKEN,D_ as TOKENIZER_ARIA_LABEL,P_ as TOKENIZER_POPOVER_REMOVE,L_ as TOKEN_ARIA_DELETABLE,B_ as TREE_ITEM_ARIA_LABEL,t_ as TREE_ITEM_COLLAPSE_NODE,U_ as TREE_ITEM_EXPAND_NODE,M_ as VALUE_STATE_ERROR,nE as VALUE_STATE_ERROR_ALREADY_SELECTED,K_ as VALUE_STATE_INFORMATION,V_ as VALUE_STATE_SUCCESS,n_ as VALUE_STATE_TYPE_ERROR,c_ as VALUE_STATE_TYPE_INFORMATION,o_ as VALUE_STATE_TYPE_SUCCESS,s_ as VALUE_STATE_TYPE_WARNING,G_ as VALUE_STATE_WARNING,e_ as YEAR_PICKER_DESCRIPTION,m_ as default};
