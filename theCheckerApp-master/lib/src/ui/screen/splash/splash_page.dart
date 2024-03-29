
import 'dart:async';
import '../../../../src/ui/widget/fade_animation.dart';
import '../../../../src/utils/utils.dart';
import '../../../../main.dart';
import '../../../routes/app_pages.dart';
import '../../../storage/pref.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class Splash extends StatefulWidget {

  const Splash({Key? key}) : super(key: key);

  @override
  _SplashState createState() => _SplashState();
}

class _SplashState extends State<Splash> {

  @override
  void initState() {
    super.initState();

    Timer(const Duration(seconds: 4),() async {
      String token = Pref.to.tokenVal;
      print('token: $token');
      if(token.isEmpty){
        Get.offNamed(Routes.LOGIN);
      }else{
        log(this, 'role ${Pref.to.roleVal}');
        if(Pref.to.roleVal == 'Checker'){
          Get.offNamed(Routes.DASHBOARD);
        }else{
          Get.offNamed(Routes.RECEPTION);
        }
      }
    });

  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: FadeAnimation(delay: 1, child: Center(child: SizedBox(width: Get.width / 3,child: Image.asset('logo'.toPng,)))),
    );
  }

}
