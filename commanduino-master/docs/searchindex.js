Search.setIndex({docnames:["commanduino","commanduino.commanddevices","commanduino.devices","examples","index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["commanduino.rst","commanduino.commanddevices.rst","commanduino.devices.rst","examples.rst","index.rst"],objects:{"":{Axis:[2,0,0,"-"],CommandAnalogRead:[1,0,0,"-"],CommandAnalogWrite:[1,0,0,"-"],CommandDigitalRead:[1,0,0,"-"],CommandDigitalWrite:[1,0,0,"-"],CommandLinearAccelStepper:[1,0,0,"-"],CommandServo:[1,0,0,"-"],commanddevice:[1,0,0,"-"],commandhandler:[0,0,0,"-"],commandmanager:[0,0,0,"-"],commanduino:[0,0,0,"-"],lock:[0,0,0,"-"],register:[1,0,0,"-"]},"commanduino.commanddevices":{commandanalogread:[1,0,0,"-"],commandanalogwrite:[1,0,0,"-"],commanddevice:[1,0,0,"-"],commanddigitalread:[1,0,0,"-"],commanddigitalwrite:[1,0,0,"-"],commandlinearaccelstepper:[1,0,0,"-"],commandservo:[1,0,0,"-"],register:[1,0,0,"-"]},"commanduino.commanddevices.commandanalogread":{CommandAnalogRead:[1,1,1,""]},"commanduino.commanddevices.commandanalogread.CommandAnalogRead":{handle_level_command:[1,2,1,""],register_all_requests:[1,2,1,""]},"commanduino.commanddevices.commandanalogwrite":{CommandAnalogWrite:[1,1,1,""]},"commanduino.commanddevices.commandanalogwrite.CommandAnalogWrite":{set_pwm_value:[1,2,1,""]},"commanduino.commanddevices.commanddevice":{CommandDevice:[1,1,1,""]},"commanduino.commanddevices.commanddevice.CommandDevice":{from_config:[1,2,1,""],handle_command:[1,2,1,""],init:[1,2,1,""],register_request:[1,2,1,""],send:[1,2,1,""],set_command_header:[1,2,1,""],set_write_function:[1,2,1,""],unrecognized:[1,2,1,""]},"commanduino.commanddevices.commanddigitalread":{CommandDigitalRead:[1,1,1,""]},"commanduino.commanddevices.commanddigitalread.CommandDigitalRead":{handle_state_command:[1,2,1,""],register_all_requests:[1,2,1,""]},"commanduino.commanddevices.commanddigitalwrite":{CommandDigitalWrite:[1,1,1,""]},"commanduino.commanddevices.commanddigitalwrite.CommandDigitalWrite":{high:[1,2,1,""],low:[1,2,1,""],set_level:[1,2,1,""]},"commanduino.commanddevices.commandlinearaccelstepper":{CommandLinearAccelStepper:[1,1,1,""]},"commanduino.commanddevices.commandlinearaccelstepper.CommandLinearAccelStepper":{apply_reverted_direction:[1,2,1,""],disable_acceleration:[1,2,1,""],disable_revert_switch:[1,2,1,""],enable_acceleration:[1,2,1,""],enable_revert_switch:[1,2,1,""],handle_acceleration_command:[1,2,1,""],handle_current_position_command:[1,2,1,""],handle_distance_to_go_command:[1,2,1,""],handle_max_speed_command:[1,2,1,""],handle_moving_state_command:[1,2,1,""],handle_speed_command:[1,2,1,""],handle_switch_state_command:[1,2,1,""],handle_target_position_command:[1,2,1,""],home:[1,2,1,""],init:[1,2,1,""],is_moving:[1,2,1,""],move:[1,2,1,""],move_to:[1,2,1,""],register_all_requests:[1,2,1,""],set_acceleration:[1,2,1,""],set_all_params:[1,2,1,""],set_current_position:[1,2,1,""],set_homing_speed:[1,2,1,""],set_max_speed:[1,2,1,""],set_running_speed:[1,2,1,""],stop:[1,2,1,""],wait_until_idle:[1,2,1,""]},"commanduino.commanddevices.commandservo":{CommandServo:[1,1,1,""]},"commanduino.commanddevices.commandservo.CommandServo":{handle_angle_command:[1,2,1,""],init:[1,2,1,""],register_all_requests:[1,2,1,""],remove_limit:[1,2,1,""],set_angle:[1,2,1,""],set_limit:[1,2,1,""]},"commanduino.commanddevices.register":{add_to_bonjour_register:[1,3,1,""],create_and_setup_device:[1,3,1,""]},"commanduino.commandhandler":{CommandHandler:[0,1,1,""],SerialCommandHandler:[0,1,1,""],TCPIPCommandHandler:[0,1,1,""]},"commanduino.commandhandler.CommandHandler":{add_command:[0,2,1,""],add_default_handler:[0,2,1,""],add_relay:[0,2,1,""],build_remaining:[0,2,1,""],forge_command:[0,2,1,""],from_config:[0,2,1,""],handle:[0,2,1,""],process_char:[0,2,1,""],remove_command:[0,2,1,""],remove_default_handler:[0,2,1,""],remove_relay:[0,2,1,""],set_command_decimal:[0,2,1,""],set_command_header:[0,2,1,""]},"commanduino.commandhandler.SerialCommandHandler":{close:[0,2,1,""],open:[0,2,1,""],process_serial:[0,2,1,""],run:[0,2,1,""],send:[0,2,1,""],stop:[0,2,1,""],wait_until_running:[0,2,1,""],write:[0,2,1,""]},"commanduino.commandhandler.TCPIPCommandHandler":{close:[0,2,1,""],open:[0,2,1,""],process_data:[0,2,1,""],run:[0,2,1,""],send:[0,2,1,""],stop:[0,2,1,""],wait_until_running:[0,2,1,""],write:[0,2,1,""]},"commanduino.commandmanager":{CommandBonjour:[0,1,1,""],CommandManager:[0,1,1,""],VirtualAttribute:[0,1,1,""],VirtualDevice:[0,1,1,""]},"commanduino.commandmanager.CommandBonjour":{clear_bonjour_info:[0,2,1,""],detect_device:[0,2,1,""],get_bonjour_id:[0,2,1,""],handle_bonjour:[0,2,1,""],send_bonjour:[0,2,1,""]},"commanduino.commandmanager.CommandManager":{add_command_handler:[0,2,1,""],from_config:[0,2,1,""],from_configfile:[0,2,1,""],handle_init:[0,2,1,""],register_all_devices:[0,2,1,""],register_device:[0,2,1,""],remove_command_handler:[0,2,1,""],request_and_wait_for_init:[0,2,1,""],request_init:[0,2,1,""],set_devices_as_attributes:[0,2,1,""],unrecognized:[0,2,1,""],unregister_device:[0,2,1,""],wait_device_for_init:[0,2,1,""]},"commanduino.devices":{axis:[2,0,0,"-"]},"commanduino.devices.axis":{Axis:[2,1,1,""],MultiAxis:[2,1,1,""]},"commanduino.devices.axis.Axis":{cast_position:[2,2,1,""],get_current_position:[2,2,1,""],get_switch_state:[2,2,1,""],home:[2,2,1,""],initialize:[2,2,1,""],is_initialized:[2,2,1,""],is_moving:[2,2,1,""],move:[2,2,1,""],move_to:[2,2,1,""],position_to_step:[2,2,1,""],step_to_position:[2,2,1,""],stop:[2,2,1,""],wait_until_idle:[2,2,1,""]},"commanduino.devices.axis.MultiAxis":{get_current_position:[2,2,1,""],get_switch_state:[2,2,1,""],home:[2,2,1,""],initialize:[2,2,1,""],is_initialized:[2,2,1,""],is_moving:[2,2,1,""],move:[2,2,1,""],move_to:[2,2,1,""],stop:[2,2,1,""],wait_until_idle:[2,2,1,""]},"commanduino.lock":{Lock:[0,1,1,""]},"commanduino.lock.Lock":{acquire:[0,2,1,""],ensure_released:[0,2,1,""],locked:[0,2,1,""],release:[0,2,1,""],wait_until_released:[0,2,1,""]},commanduino:{commanddevices:[1,0,0,"-"],commandhandler:[0,0,0,"-"],commandmanager:[0,0,0,"-"],lock:[0,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function"},terms:{"byte":0,"class":[0,1,2],"default":[0,1,2],"float":[0,1,2],"function":[0,1],"import":3,"int":[0,1,2],"new":[0,1],"return":[0,1,2],"switch":[1,2],"true":[0,1,2],Axes:2,For:[0,1,4],THe:2,The:[0,1,2,3],Then:0,These:3,a_char:0,a_seri:0,abov:3,acceler:[0,4],access:[1,3],acquir:0,actual:0,actuat:2,add:[0,1,3],add_command:0,add_command_handl:0,add_default_handl:0,add_delim:0,add_relai:0,add_to_bonjour_regist:1,address:0,all:[0,1,2,4],allow:[0,3],along:2,amount:[0,2],analog:[0,4],analogread:1,analogwrit:1,angl:1,answer:1,answer_command:1,append:0,apply_reverted_direct:1,arduino:[0,1,3],arg:[0,1,2],argument:[0,1,2],associ:0,attach:3,attempt:0,attribut:0,automat:1,avail:0,axes:2,axi:[0,1,4],base:[0,1,2],basicconfig:3,baudrat:0,becaus:0,been:0,befor:0,being:0,below:3,between:0,board:[0,3],bonjour:[0,1],bonjour_id:[0,1],bool:[0,1,2],bound:0,buffer:0,build:0,build_remain:0,call:1,callabl:0,callback:[0,1],callback_funct:0,callback_function_for_variable_upd:1,can:[1,2,3],cast:2,cast_posit:2,casted_posit:2,certain:1,charact:0,check:[0,1,2],classmethod:[0,1],clear_bonjour_info:0,close:0,cls:0,cmbonjourerror:0,cmd:[0,1],cmd_decim:0,cmd_header:0,cmd_list:0,cmdeviceregistererror:[0,1],cmdhdl:1,cmdheader:1,cmdmgr:3,cmdmng:3,cmhandlerdiscoverytimeout:0,code:3,collect:[0,2],command:[3,4],command_config:0,command_id:[0,1,3],commandanalogread:1,commandanalogwrit:1,commandbonjour:0,commanddevic:1,commanddigitalread:1,commanddigitalwrit:1,commandhandl:0,commandlinearaccelstepp:1,commandmanag:[0,3],commandservo:[1,4],commanduino:[1,2,3],commanuino:4,commun:[0,1,3],complet:0,concern:2,config:[0,1],configfil:0,configur:[0,1,4],connect:0,constitu:0,constructor:1,contain:[0,1],control:[0,1,2,3],convert:2,copi:0,creat:[0,1,3],create_and_setup_devic:[0,1],current:[0,1,2],custom:[0,1],data:0,decim:0,default_acceler:1,default_baudr:0,default_bonjour_timeout:0,default_cmd_decim:0,default_delim:0,default_homing_spe:1,default_init_n_repeat:0,default_init_timeout:0,default_max_spe:1,default_spe:1,default_term:0,default_timeout:[0,1],delet:0,delim:0,delimit:0,delta_position_in_unit:2,demo:4,depend:[0,3],depth:3,design:0,detail:[0,1],detect:0,detect_devic:0,dev:3,devic:[0,3,4],device_bonjour_id:0,device_config:1,device_info:0,device_nam:0,devices_dict:0,dict:[0,1],dictionari:[0,1],differ:1,digit:[0,4],digitalread:1,digitalwrit:1,direct:1,disabl:1,disable_acceler:1,disable_revert_switch:1,distanc:1,document:[0,1,2],doesn:0,each:1,either:0,elaps:0,enabl:1,enable_acceler:1,enable_revert_switch:1,enabled_acceler:1,ensur:0,ensure_releas:0,etc:3,everi:0,exampl:4,fals:[0,1,2],file:[0,4],find:[0,3,4],first:3,fix:0,focus:3,forc:[0,2],forge_command:0,form:0,format:3,found:0,from:[0,1,3],from_config:[0,1],from_configfil:[0,3],full:0,gain:3,get:[0,2],get_angl:3,get_bonjour_id:0,get_current_posit:2,get_moving_st:1,get_switch_st:2,goe:1,handl:[0,1],handle_acceleration_command:1,handle_angle_command:1,handle_bonjour:0,handle_command:1,handle_current_position_command:1,handle_distance_to_go_command:1,handle_init:0,handle_level_command:1,handle_max_speed_command:1,handle_moving_state_command:1,handle_speed_command:1,handle_state_command:1,handle_switch_state_command:1,handle_target_position_command:1,handler:[1,4],handler_config:0,handler_to_remov:0,hardwar:0,has:0,have:0,header:[0,1],here:[0,1,3,4],high:1,hold:0,home:[1,2],homing_spe:1,how:3,howev:0,identifi:3,idl:[1,2],index:4,individu:0,inf:2,info:[3,4],inform:[0,1,4],init:1,init_n_repeat:0,init_timeout:0,initi:2,initial_angl:1,initialis:[0,1,2,3],insert:[3,4],instanc:[0,1],instanti:0,interfac:0,intern:0,interrupt:0,ios:3,is_initi:2,is_mov:[1,2],is_valid:0,json:4,just:3,kwarg:0,label:3,lai:3,later:1,length:0,level:[1,3],librari:[1,3],linear:[0,2,4],linear_actu:2,link:0,list:[0,1,2,3],lock:4,log:3,logger:0,low:1,mai:0,manag:[1,3,4],mani:3,max_limit:1,max_posit:2,max_spe:1,maximum:[1,2],messag:0,method:[0,3],min_limit:1,min_posit:2,minimum:[1,2],mock:0,mode:0,modul:[3,4],more:[0,1,4],motor:3,move:[1,2],move_to:[1,2],movement:[1,2],msg:0,multiaxi:2,n_step:2,name:[0,1,3],necessari:[0,3,4],need:0,none:[0,1],normal:0,now:3,number:[0,1,2],object:[0,1,2,3],obtain:[0,1],onc:1,onli:0,open:0,option:0,other:3,out:3,over:0,packag:[0,3,4],page:[0,3,4],paramet:[1,3],partial:0,per:[1,2],pleas:[0,1,3,4],point:1,port:[0,3],posit:[1,2],position_array_in_unit:2,position_in_unit:2,position_to_step:2,possibl:0,print:3,process:0,process_char:0,process_data:0,process_seri:0,properti:1,protocol:0,pwm:1,python:[0,4],rais:[0,1],rang:3,raw:0,read:[0,4],readi:3,receiv:0,refer:0,regist:[0,4],register_all_devic:0,register_all_request:1,register_devic:0,register_request:1,registr:1,relai:0,relat:4,releas:0,remov:0,remove_command:0,remove_command_handl:0,remove_default_handl:0,remove_limit:1,remove_relai:0,replac:[0,3],repres:[0,1,2],request:[0,1],request_and_wait_for_init:0,request_command:1,request_init:0,revers:1,revert:1,reverted_direct:1,reverted_switch:1,run:[0,1],sampl:3,script:4,search:4,second:1,see:[0,1,3,4],seem:0,self:[0,1,2],send:[0,1],send_bonjour:0,serial:[0,1],serialcommandhandl:[0,1],serialwin32:0,servo1:3,servo2:3,servo:[0,3,4],set:[0,1,2,3],set_acceler:1,set_all_param:1,set_angl:[1,3],set_command_decim:0,set_command_head:[0,1],set_current_posit:1,set_devices_as_attribut:0,set_homing_spe:1,set_level:1,set_limit:1,set_max_spe:1,set_pwm_valu:1,set_running_spe:1,set_write_funct:1,setup:[0,1],signal:0,similar:3,simul:0,sinc:0,singl:0,singular:2,sleep:3,sleep_tim:0,socket:0,sourc:[0,1,2],specif:1,speed:1,start:0,state:[1,2],statu:2,step:[1,2],step_to_posit:2,stepper:[0,4],steps_per_second:1,steps_per_second_per_second:1,stop:[0,1,2],str:[0,1,2],subpackag:4,suppli:1,support:[1,3],switch_stat:2,taken:0,target:1,tcp:0,tcpipcommandhandl:0,term:0,termin:0,test:0,thecommand:0,thi:[0,1,2,3,4],thing:0,thread:0,through:3,throughout:0,time:[0,1,3],timeout:[0,1],too:3,tto:2,tty:3,ttyacm0:3,ttyacm1:3,ttyacm5:3,tupl:[0,2],udp:0,union:[0,2],unit:2,unit_per_step:2,units_per_step:2,unlock:0,unrecogn:[0,1],unrecognis:[0,1],unregister_devic:0,until:[0,1,2],updat:[0,1],upload:3,upon:3,usag:1,usbmodem1411:3,use:[0,1,3],used:[0,1,3],uses:3,using:[0,3,4],valid:0,valu:1,vari:0,variabl:[0,1,2],variable_init_valu:1,variable_nam:1,via:[0,3],virtual:0,virtualattribut:0,virtualdevic:0,wai:3,wait:[0,1,2],wait_device_for_init:0,wait_until_idl:[1,2],wait_until_releas:0,wait_until_run:0,wanki:0,welcom:4,when:0,which:[0,2,3],write:[0,4],write_func:1,you:[0,3,4]},titles:["Commanduino Library","Command Devices Package","Devices Package","Examples","Documentation for the Commanduino Library"],titleterms:{acceler:1,analog:1,axi:2,command:[0,1],commandservo:3,commanduino:[0,4],configur:3,content:[0,1,4],demo:3,devic:[1,2],digit:1,document:4,exampl:3,file:3,handler:0,indic:4,json:3,librari:[0,4],linear:1,lock:0,manag:0,modul:[0,1,2],packag:[1,2],python:3,read:1,regist:1,script:3,servo:1,stepper:1,subpackag:0,tabl:4,todo:0,write:1}})