
import '../../../data/model/room_model.dart';
import '../../widget/checker.dart';
import '../../../../src/ui/screen/rooms/widgets/room_box.dart';
import '../../../../src/ui/widget/textfield_widget.dart';
import 'package:flutter/cupertino.dart';
import '../../../../src/utils/utils.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../../../controllers/rooms_controller.dart';
import '../../../routes/app_pages.dart';
import '../../widget/button_widget.dart';
import '../../widget/tap_widget.dart';
import 'widgets/dashline.dart';

class Rooms extends GetView<RoomsController>{

  TextEditingController controllerSearchBox = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return GetX<RoomsController>(
      initState: (_){

      },
      builder: (_) {
        _.isLoading;

        return Scaffold(
          appBar: CupertinoNavigationBar(
            middle: Text('rooms'.tr),
            leading: CupertinoNavigationBarBackButton(
              previousPageTitle: 'home'.tr,
              onPressed: () =>Get.back(),
            ),
          ),
          body: Column(
            children: [
              18.ph,

              // search bar
              Row(
                children: [
                  Flexible(child: TxtField(controller: controllerSearchBox, label: 'search_room'.tr, hasSearchIcon: true,)),
                  8.pw,
                  SizedBox(width: 130, height: 47, child: Btn(label: 'filter'.tr, secondaryBtn: true, onPressed: ()=>_showFilterDialog(context))),
                  8.pw,
                  SizedBox(width: 130, height: 47, child: Btn(label: 'search'.tr, onPressed: (){})),
                ],
              ).paddingSymmetric(horizontal: 16),

              16.ph,

              if(_.isLoading) ... [
                const Expanded(child: Center(child: SizedBox(width: 24, height: 24, child: CupertinoActivityIndicator())))
              ] else ... [
                Expanded(
                  child: SingleChildScrollView(
                      child: Column(children: [
                        for(int i=0;i<_.levelsList.length;i++)
                          Column(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Row(
                                children: [
                                  Text('${_.levelsList[i].level?.title}').setStyle(size: 17),
                                ],
                              ).paddingOnly(left: 16),
                              CustomPaint(
                                  painter: DashedLinePainter(),
                                  size: Size(Get.width - 32, 1.5)
                              ),
                              12.ph,
                              roomsListView(_.levelsList[i].level?.id),
                              20.ph,
                            ],
                          ),
                      ],)
                  ),
                )
              ]

            ],
          ));
      });
  }

  Widget roomsListView(levelId) {
    List<Room> list = controller.roomsList.where((p0) => p0.level?.id == levelId).toList();
    return SizedBox(
      height: 125,
      child: ListView.builder(
        physics: const BouncingScrollPhysics(),
        scrollDirection: Axis.horizontal,
        itemCount: list.length,
        itemBuilder: (context, index) {
            Room room = list[index];
            return RoomBox(onTap: ()=>Get.toNamed(Routes.CLEANERS, arguments: room), title: '${room.name}', type: '${room.roomType?.title}'.tr, status: room.status ?? '', report: room.report ?? '',);
        },
      ).paddingOnly(left: 16),
    );
  }

  void _showFilterDialog(BuildContext context) {
    Dialog errorDialog = Dialog(
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12.0)), //this right here
      child: SizedBox(
        width: Get.width / 2.2,
        child: Obx(()=>Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[

            ClipRRect(
              borderRadius: const BorderRadius.only(topRight: Radius.circular(12), topLeft: Radius.circular(12)),
              child: CupertinoNavigationBar(
                leading: CupertinoNavigationBarBackButton(
                  previousPageTitle: 'cancel'.tr,
                  onPressed: () =>Get.back(),
                ),
                trailing: Tap(
                  onTap: ()=>Get.back(),
                  child: Text('reset'.tr).setStyle(color: Colors.red),
                ),
                middle: Text('filter_rooms'.tr),
              ),
            ),

            Row(
              children: [
                Text('bed_type'.tr, style: Get.textTheme.subtitle1,).setStyle(size: 14, weight: FontWeight.w500).paddingOnly(left: 24, top: 24),
              ],
            ),
            8.ph,
            Row(
              children: [
                Expanded(
                  child: Checker(label: 'single_bed'.tr, state: controller.singleBedCheck.value, type: CheckerType.Check, onChanged: (newValue)=>controller.singleBedCheck.value = newValue, longText: false,),
                ),
                16.pw,
                Expanded(
                  child: Checker(label: 'double_bed'.tr, state: controller.doubleBedCheck.value, type: CheckerType.Check, onChanged: (newValue)=>controller.doubleBedCheck.value = newValue, longText: false),
                ),
              ],
            ).paddingSymmetric(horizontal: 24),
            12.ph,
            Row(
              children: [
                Expanded(
                  child: Checker(label: 'suite'.tr, state: controller.suiteCheck.value, type: CheckerType.Check, onChanged: (newValue)=>controller.suiteCheck.value = newValue, longText: false),
                ),
                16.pw,
                Expanded(
                  child: const SizedBox(),
                ),
              ],
            ).paddingSymmetric(horizontal: 24),


            Row(
              children: [
                Text('status'.tr, style: Get.textTheme.subtitle1,).setStyle(size: 14, weight: FontWeight.w500).paddingOnly(left: 24, top: 24),
              ],
            ),
            8.ph,
            Row(
              children: [
                Expanded(
                  child: Checker(label: 'free'.tr, state: controller.freeCheck.value, type: CheckerType.Check, onChanged: (newValue)=>controller.freeCheck.value = newValue, longText: false),
                ),
                16.pw,
                Expanded(
                  child: Checker(label: 'occupied'.tr, state: controller.occupiedCheck.value, type: CheckerType.Check, onChanged: (newValue)=>controller.occupiedCheck.value = newValue, longText: false),
                ),
              ],
            ).paddingSymmetric(horizontal: 24),


            Row(
              children: [
                Text('cleaning'.tr, style: Get.textTheme.subtitle1,).setStyle(size: 14, weight: FontWeight.w500).paddingOnly(left: 24, top: 24),
              ],
            ),
            8.ph,
            Row(
              children: [
                Expanded(
                  child: Checker(label: 'not_cleaned'.tr, state: controller.notCleanedCheck.value, type: CheckerType.Check, onChanged: (newValue)=>controller.notCleanedCheck.value = newValue, longText: false),
                ),
                16.pw,
                Expanded(
                  child: Checker(label: 'in_progress'.tr, state: controller.inProgressCheck.value, type: CheckerType.Check, onChanged: (newValue)=>controller.inProgressCheck.value = newValue, longText: false),
                ),
              ],
            ).paddingSymmetric(horizontal: 24),
            12.ph,
            Row(
              children: [
                Expanded(
                  child: Checker(label: 'cleaned'.tr, state: controller.cleanedCheck.value, type: CheckerType.Check, onChanged: (newValue)=>controller.cleanedCheck.value = newValue, longText: false),
                ),
                16.pw,
                Expanded(
                  child: const SizedBox(),
                ),
              ],
            ).paddingSymmetric(horizontal: 24),


            42.ph,

            SizedBox(width: Get.width / 4.8, child: Btn(label: 'apply_filters'.tr, onPressed: ()=>Get.back())),
            24.ph,

          ],
        )),
      ),
    );
    showDialog(context: context, builder: (BuildContext context) => errorDialog);
  }

}