
import 'package:checkerapp/src/ui/screen/checklist/continue_order_page.dart';
import 'package:checkerapp/src/ui/screen/materials/materials_page.dart';
import 'package:get/get.dart';

import '../binding/reception_binding.dart';
import '../ui/screen/reception/reception_page.dart';
import '../binding/dashboard_binding.dart';
import '../ui/screen/dashboard/dashboard_page.dart';
import '../binding/checklist_binding.dart';
import '../ui/screen/checklist/checklist_page.dart';
import '../binding/cleaners_binding.dart';
import '../binding/rooms_binding.dart';
import '../ui/screen/cleaners/cleaners_page.dart';
import '../ui/screen/rooms/rooms_page.dart';
import '../binding/auth_binding.dart';
import '../ui/screen/login/login_page.dart';
import '../ui/screen/splash/splash_page.dart';

part './app_routes.dart';

class AppPages {
  static final pages = [
    GetPage(
        name: Routes.SPLASH,
        page: () => const Splash(),),
    GetPage(
        name: Routes.LOGIN,
        page: () => Login(),
        binding: AuthBinding()),
    GetPage(
        name: Routes.DASHBOARD,
        page: () => Dashboard(),
        binding: DashboardBinding()),
    GetPage(
        name: Routes.ROOMS,
        page: () => Rooms(),
        // binding: RoomsBinding()
    ),
    GetPage(
        name: Routes.CLEANERS,
        page: () => Cleaners(),
        // binding: CleanersBinding()
    ),
    GetPage(
      name: Routes.MATERIALS,
      page: () => Materials(),
      // binding: CleanersBinding()
    ),
    GetPage(
        name: Routes.CHECKLIST,
        page: () => CheckList(),
        binding: CheckListBinding()),
    GetPage(
        name: Routes.RECEPTION,
        page: () => Reception(),
        binding: ReceptionBinding()),
    GetPage(
        name: Routes.CONTINUE_ORDER,
        page: () => ContinueOrder()),
  ];
}
