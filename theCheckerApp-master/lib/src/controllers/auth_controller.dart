
import 'dart:async';

import 'package:checkerapp/src/network/response.dart';
import 'package:checkerapp/src/storage/pref.dart';

import '../../src/controllers/basic.dart';
import '../data/repository/main_repository.dart';
import 'package:get/get.dart';

import '../routes/app_pages.dart';
import '../utils/utils.dart';

class AuthController extends Basic {
  static AuthController get to => Get.find();

  final MainRepository repository;
  AuthController({required this.repository});

  // login variables
  final enabledLoginButton = RxBool(false);
  final obscurePass = RxBool(true);

  login(String userName, String pass) async{

    try{
      isLoading = true;

      ApiResponse result = await repository.login(userName, pass);

      final role = result.body['data']['loginResult']['role'];
      final token = result.body['data']['loginResult']['accessToken'];
      Pref.to.setString(Pref.token, token);
      Pref.to.setString(Pref.role, role);

      if(role.toString().contains('Checker')){
        Get.offNamed(Routes.DASHBOARD);
        Toast.success('you_are_login'.tr, 'login'.tr);
      }else if(role.toString().contains('HotelReception')){
        Get.offNamed(Routes.RECEPTION);
        Toast.success('you_are_login'.tr, 'login'.tr);
      }else{
        Toast.error('no_access'.tr);
      }
    }catch(e, s){
      log(this, e);
      Toast.error(e.toString());
    }finally{
        isLoading = false;
    }

  }


}