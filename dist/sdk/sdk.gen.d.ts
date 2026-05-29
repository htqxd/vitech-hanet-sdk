import { Client, Options as Options2, TDataShape } from './client';
import { DepartmentAddPersonData, DepartmentAddPersonResponses, DepartmentCreateData, DepartmentCreateResponses, DepartmentListData, DepartmentListPersonData, DepartmentListPersonResponses, DepartmentListResponses, DepartmentRemoveData, DepartmentRemovePersonData, DepartmentRemovePersonResponses, DepartmentRemoveResponses, DepartmentUpdateData, DepartmentUpdateResponses, DeviceGetConnectionStatusData, DeviceGetConnectionStatusDeprecatedData, DeviceGetConnectionStatusDeprecatedResponses, DeviceGetConnectionStatusResponses, DeviceGetDeviceInfoData, DeviceGetDeviceInfoResponses, DeviceGetListDeviceByPlaceData, DeviceGetListDeviceByPlaceDeprecatedData, DeviceGetListDeviceByPlaceDeprecatedResponses, DeviceGetListDeviceByPlaceResponses, DeviceGetListDeviceData, DeviceGetListDeviceDeprecatedData, DeviceGetListDeviceDeprecatedResponses, DeviceGetListDeviceResponses, DeviceSetDeviceMqttData, DeviceSetDeviceMqttResponses, DeviceUpdateDeviceData, DeviceUpdateDeviceResponses, Oauth2AuthorizeData, Oauth2AuthorizeResponses, PartnerAddPlacePartnerData, PartnerAddPlacePartnerResponses, PartnerGetListUserPartnerData, PartnerGetListUserPartnerResponses, PartnerRemovePlacePartnerData, PartnerRemovePlacePartnerResponses, PartnerRemoveUserPartnerData, PartnerRemoveUserPartnerResponses, PartnerUpdateTokenData, PartnerUpdateTokenResponses, PersonGetCheckinByPlaceIdInDayData, PersonGetCheckinByPlaceIdInDayResponses, PersonGetCheckinByPlaceIdInTimestampData, PersonGetCheckinByPlaceIdInTimestampResponses, PersonGetListByAliasIdAllPlaceData, PersonGetListByAliasIdAllPlaceDeprecatedData, PersonGetListByAliasIdAllPlaceDeprecatedResponses, PersonGetListByAliasIdAllPlaceResponses, PersonGetListByAliasIdData, PersonGetListByAliasIdResponses, PersonGetListByPlaceData, PersonGetListByPlaceDeprecatedData, PersonGetListByPlaceDeprecatedResponses, PersonGetListByPlaceResponses, PersonGetTotalCheckinByPlaceIdInDayData, PersonGetTotalCheckinByPlaceIdInDayResponses, PersonGetTotalCheckinByPlaceIdInTimestampData, PersonGetTotalCheckinByPlaceIdInTimestampResponses, PersonGetTotalPersonByPlaceIdData, PersonGetTotalPersonByPlaceIdResponses, PersonGetUserInfoByAliasIdData, PersonGetUserInfoByAliasIdResponses, PersonGetUserInfoByPersonIdData, PersonGetUserInfoByPersonIdResponses, PersonRegisterByUrlData, PersonRegisterByUrlResponses, PersonRegisterData, PersonRegisterResponses, PersonRemoveAllPersonInPlaceData, PersonRemoveAllPersonInPlaceResponses, PersonRemoveByPlaceData, PersonRemoveByPlaceResponses, PersonRemoveData, PersonRemovePersonByIdData, PersonRemovePersonByIdResponses, PersonRemovePersonByListAliasIdData, PersonRemovePersonByListAliasIdResponses, PersonRemoveResponses, PersonTakeFacePictureData, PersonTakeFacePictureResponses, PersonUpdateAliasIdData, PersonUpdateAliasIdResponses, PersonUpdateByFaceImageByAliasIdData, PersonUpdateByFaceImageByAliasIdResponses, PersonUpdateByFaceImageByPersonIdData, PersonUpdateByFaceImageByPersonIdResponses, PersonUpdateByFaceImageData, PersonUpdateByFaceImageResponses, PersonUpdateByFaceUrlByAliasIdData, PersonUpdateByFaceUrlByAliasIdResponses, PersonUpdateByFaceUrlByPersonIdData, PersonUpdateByFaceUrlByPersonIdResponses, PersonUpdateByFaceUrlData, PersonUpdateByFaceUrlResponses, PersonUpdateData, PersonUpdateInfoData, PersonUpdateInfoResponses, PersonUpdateResponses, PlaceAddPlaceData, PlaceAddPlaceResponses, PlaceGetPlaceInfoData, PlaceGetPlaceInfoResponses, PlaceGetPlacesData, PlaceGetPlacesResponses, PlaceRemovePlaceData, PlaceRemovePlaceResponses, PlaceUpdatePlaceData, PlaceUpdatePlaceResponses, ProfileGetProfileData, ProfileGetProfileResponses, TokenData, TokenResponses } from './types.gen';
export type Options<TData extends TDataShape = TDataShape, ThrowOnError extends boolean = boolean, TResponse = unknown> = Options2<TData, ThrowOnError, TResponse> & {
    /**
     * You can provide a client instance returned by `createClient()` instead of
     * individual options. This might be also useful if you want to implement a
     * custom client.
     */
    client?: Client;
    /**
     * You can pass arbitrary values through the `meta` object. This can be
     * used to access values that aren't defined as part of the SDK function.
     */
    meta?: Record<string, unknown>;
};
/**
 * /oauth2/authorize
 *
 * HANETsửdụng`OAuth2`đểcấpquyềnchoclientcóthểtruyxuấtthôngtincácthiếtbị
 */
export declare const oauth2Authorize: <ThrowOnError extends boolean = false>(options: Options<Oauth2AuthorizeData, ThrowOnError>) => import('./client').RequestResult<Oauth2AuthorizeResponses, unknown, ThrowOnError, "fields">;
/**
 * /token
 *
 * APInàyChophépđốitáclấytoken
 *
 * Chúý:paramgrant_type
 * Case1:Dùnggrant_typelàauthorization_codeđểlấytoken.
 * Case2:Dùnggrant_typelàrefresh_tokenđểlấylạirefeshTokenkhitokenhếthạn
 */
export declare const token: <ThrowOnError extends boolean = false>(options?: Options<TokenData, ThrowOnError>) => import('./client').RequestResult<TokenResponses, unknown, ThrowOnError, "fields">;
/**
 * /partner/updateToken
 *
 * KhicóeventxảyratrênthiếtbịcủaHANET,backendcủaHANETsẽchủđộngđẩydatavềchoclientthôngqua`webhook`màclientcungcấp.Nếuclientcónhiềutậpuserkhácnhau,màmuốnphânbiệtdatathuộcvềusernào,thìcầnupdatechoHANETbiếtID/Tokencủauserđó.Gọilà`partner_token`
 */
export declare const partnerUpdateToken: <ThrowOnError extends boolean = false>(options?: Options<PartnerUpdateTokenData, ThrowOnError>) => import('./client').RequestResult<PartnerUpdateTokenResponses, unknown, ThrowOnError, "fields">;
/**
 * /partner/addPlacePartner
 *
 * HANETquảnlýthiếtbịtheođịađiểm.
 * -1tàikhoảnHANETcóthểquảnlýnhiềuđịađiểm
 * -1địađiểmcóthểcónhiềuthiếtbị
 *
 * Mặcđịnhlàkhibấtkìthiếtbịcóeventxảyra,HANETđềuđẩydatavềchođốitácthôngqua`webhook`.Tuynhiên,đốitáccóthểchouserquảnlýđịađiểmnàothìmớiđẩydatađikhicósựkiệnxảyra,bằngcáchsửdụngAPInàyđểupdatechoHANET
 */
export declare const partnerAddPlacePartner: <ThrowOnError extends boolean = false>(options?: Options<PartnerAddPlacePartnerData, ThrowOnError>) => import('./client').RequestResult<PartnerAddPlacePartnerResponses, unknown, ThrowOnError, "fields">;
/**
 * /partner/removePlacePartner
 *
 * Đốitáccóthểchouserquảnlýđịađiểmnàokhôngmuốnđẩydatađikhicósựkiệnxảyra,bằngcáchsửdụngAPInàyđểupdatechoHANET.
 */
export declare const partnerRemovePlacePartner: <ThrowOnError extends boolean = false>(options?: Options<PartnerRemovePlacePartnerData, ThrowOnError>) => import('./client').RequestResult<PartnerRemovePlacePartnerResponses, unknown, ThrowOnError, "fields">;
/**
 * /partner/removeUserPartner
 *
 * Đốitáccóthểxoáliênkếtapp,bằngcáchsửdụngAPInàyđểupdatechoHANET.
 */
export declare const partnerRemoveUserPartner: <ThrowOnError extends boolean = false>(options?: Options<PartnerRemoveUserPartnerData, ThrowOnError>) => import('./client').RequestResult<PartnerRemoveUserPartnerResponses, unknown, ThrowOnError, "fields">;
/**
 * /partner/getListUserPartner
 *
 * APIchophépđốitáclấydanhsáchcácappliênkếtcủamộtuser.
 */
export declare const partnerGetListUserPartner: <ThrowOnError extends boolean = false>(options?: Options<PartnerGetListUserPartnerData, ThrowOnError>) => import('./client').RequestResult<PartnerGetListUserPartnerResponses, unknown, ThrowOnError, "fields">;
/**
 * /place/getPlaces
 *
 * HANETquảnlýthiếtbịtheođịađiểm.
 * -1tàikhoảnHANETcóthểquảnlýnhiềuđịađiểm
 * -1địađiểmcóthểcónhiềuthiếtbịtrongđịađiểmđó
 *
 * APInàychophéplấydanhsáchđịađiểmcủauser.LưuýlàAPInàychỉchophéplấynhữngđịađiểmcủausertạora,địađiểmdongườikhácchiasẻchousersẽkhôngđượctrảvề
 */
export declare const placeGetPlaces: <ThrowOnError extends boolean = false>(options?: Options<PlaceGetPlacesData, ThrowOnError>) => import('./client').RequestResult<PlaceGetPlacesResponses, unknown, ThrowOnError, "fields">;
/**
 * /place/addPlace
 *
 * ChophéptạođịađiểmmớivàotàikhoảnUser.
 */
export declare const placeAddPlace: <ThrowOnError extends boolean = false>(options?: Options<PlaceAddPlaceData, ThrowOnError>) => import('./client').RequestResult<PlaceAddPlaceResponses, unknown, ThrowOnError, "fields">;
/**
 * /place/updatePlace
 *
 * Chophépcậpnhậtthôngtinđịađiểm.Lưuýlàchỉcóthểcậpnhậtthôngtinđịađiểmcủachínhusertạora.
 */
export declare const placeUpdatePlace: <ThrowOnError extends boolean = false>(options?: Options<PlaceUpdatePlaceData, ThrowOnError>) => import('./client').RequestResult<PlaceUpdatePlaceResponses, unknown, ThrowOnError, "fields">;
/**
 * /place/removePlace
 *
 * Xóađịađiểmcủauser.Lưuýlàchỉcóthểxoáđịađiểmcủachínhusertạora,vàđịađiểmphảikhôngcóthiếtbịnào.
 */
export declare const placeRemovePlace: <ThrowOnError extends boolean = false>(options?: Options<PlaceRemovePlaceData, ThrowOnError>) => import('./client').RequestResult<PlaceRemovePlaceResponses, unknown, ThrowOnError, "fields">;
/**
 * /place/getPlaceInfo
 *
 * Lấythôngtinchitiếtcủamộtđịađiểm.
 */
export declare const placeGetPlaceInfo: <ThrowOnError extends boolean = false>(options?: Options<PlaceGetPlaceInfoData, ThrowOnError>) => import('./client').RequestResult<PlaceGetPlaceInfoResponses, unknown, ThrowOnError, "fields">;
/**
 * /device/get-list-device[Deprecate]
 *
 * Lấydanhsáchcácthiếtbịcủauser.Thôngtinresponsebaogồmcácthôngtincơbảnlà:deviceID,deviceName,placeName,address.
 *
 * HANETquảnlýthiếtbịtheođịađiểm.
 * -1tàikhoảnHANETcóthểquảnlýnhiềuđịađiểm
 * -1địađiểmcóthểcónhiềuthiếtbịtrongđịađiểmđó
 */
export declare const deviceGetListDeviceDeprecated: <ThrowOnError extends boolean = false>(options?: Options<DeviceGetListDeviceDeprecatedData, ThrowOnError>) => import('./client').RequestResult<DeviceGetListDeviceDeprecatedResponses, unknown, ThrowOnError, "fields">;
/**
 * /device/getListDevice
 *
 * Lấydanhsáchcácthiếtbịcủauser.Thôngtinresponsebaogồmcácthôngtincơbảnlà:deviceID,deviceName,placeName,address.
 *
 * HANETquảnlýthiếtbịtheođịađiểm.
 * -1tàikhoảnHANETcóthểquảnlýnhiềuđịađiểm
 * -1địađiểmcóthểcónhiềuthiếtbịtrongđịađiểmđó
 */
export declare const deviceGetListDevice: <ThrowOnError extends boolean = false>(options?: Options<DeviceGetListDeviceData, ThrowOnError>) => import('./client').RequestResult<DeviceGetListDeviceResponses, unknown, ThrowOnError, "fields">;
/**
 * /device/getDeviceInfo
 *
 * Lấythôngtincủamộtthiếtbị.
 *
 * *Thôngtinrequestbaogồmcácparamsau
 * *token:accesstoken
 * *deviceID:idcủadevicemuốnlấythôngtin
 * *Thôngtinresponsebaogồmcácthôngtincơbảnlà:deviceID,deviceName,placeID,placeName.
 */
export declare const deviceGetDeviceInfo: <ThrowOnError extends boolean = false>(options?: Options<DeviceGetDeviceInfoData, ThrowOnError>) => import('./client').RequestResult<DeviceGetDeviceInfoResponses, unknown, ThrowOnError, "fields">;
/**
 * /device/get-list-device-by-place[Deprecate]
 *
 * Lấydanhsáchcácthiếtbịcủa1địađiểm.Thôngtinresponsebaogồmcácthôngtincơbảnlà:deviceID,deviceName,placeName,address.
 */
export declare const deviceGetListDeviceByPlaceDeprecated: <ThrowOnError extends boolean = false>(options?: Options<DeviceGetListDeviceByPlaceDeprecatedData, ThrowOnError>) => import('./client').RequestResult<DeviceGetListDeviceByPlaceDeprecatedResponses, unknown, ThrowOnError, "fields">;
/**
 * /device/getListDeviceByPlace
 *
 * Lấydanhsáchcácthiếtbịcủa1địađiểm.Thôngtinresponsebaogồmcácthôngtincơbảnlà:deviceID,deviceName,placeName,address.
 */
export declare const deviceGetListDeviceByPlace: <ThrowOnError extends boolean = false>(options?: Options<DeviceGetListDeviceByPlaceData, ThrowOnError>) => import('./client').RequestResult<DeviceGetListDeviceByPlaceResponses, unknown, ThrowOnError, "fields">;
/**
 * /device/updateDevice
 *
 * Chophépchỉnhsửathôngtinthiếtbị.LưuýlàphiênbảnAPIhiệntạichỉchophépthayđổiTêncủathiếtbị.
 */
export declare const deviceUpdateDevice: <ThrowOnError extends boolean = false>(options?: Options<DeviceUpdateDeviceData, ThrowOnError>) => import('./client').RequestResult<DeviceUpdateDeviceResponses, unknown, ThrowOnError, "fields">;
/**
 * /device/setDeviceMQTT
 *
 * ChophépcấuhìnhMQTTchothiếtbị.Nếuđượcbật,khithiếtbịsẽgửithôngtincheckinđếnMQTTbrokerngaylậptức.
 *
 * MQTTtopic:`/topic/detected/$camera_id`
 * MQTTpayload:
 *
 * ```json
 * {
 * "msg_id":"abcdef-1122-3344-5566-ghijklmok",
 * "camera_id":"$string",
 * "person_id":"$string",
 * "person_type":"$string",
 * "date_time":"DDMMYYYHHmmSS",
 * }
 *
 * ```
 */
export declare const deviceSetDeviceMqtt: <ThrowOnError extends boolean = false>(options?: Options<DeviceSetDeviceMqttData, ThrowOnError>) => import('./client').RequestResult<DeviceSetDeviceMqttResponses, unknown, ThrowOnError, "fields">;
/**
 * /device/get-connection-status[Deprecate]
 *
 * Lấytrạngtháionlinecủadanhsáchthiếtbị
 * -Nếudeviceonlinethìsẽtrảvềtrue.
 * -Nếudeviceofflinehoặckhôngcóquyềntruycậpthìsẽtrảvềfalse.
 */
export declare const deviceGetConnectionStatusDeprecated: <ThrowOnError extends boolean = false>(options?: Options<DeviceGetConnectionStatusDeprecatedData, ThrowOnError>) => import('./client').RequestResult<DeviceGetConnectionStatusDeprecatedResponses, unknown, ThrowOnError, "fields">;
/**
 * /device/getConnectionStatus
 *
 * Lấytrạngtháionlinecủadanhsáchthiếtbị
 * -Nếudeviceonlinethìsẽtrảvềtrue.
 * -Nếudeviceofflinehoặckhôngcóquyềntruycậpthìsẽtrảvềfalse.
 */
export declare const deviceGetConnectionStatus: <ThrowOnError extends boolean = false>(options?: Options<DeviceGetConnectionStatusData, ThrowOnError>) => import('./client').RequestResult<DeviceGetConnectionStatusResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/register
 *
 * Đăngkíhìnhảnhkhuônmặtvớitàikhoảnuser.
 *
 * *Đểthiếtbịnhậndạngđượcngườinàođóthìcầnphảiđăngkíhìnhảnhcủangườiđóđóvớihệthống
 * *HANETquảnlýdữliệukhuônmặttheođịađiểmchứkhôngphảitheothiếtbị,nêncácthiếtbịnếuđượcthêmvàocùng1địađiểmthìsẽđượcđồngbộdữliệukhuônmặtvớinhau.
 * *Chỉcầndùng1hìnhlàđủđểđăngkícho1người
 *
 *
 * VàiyêucầukhidùngAPInày:
 *
 * *APIPostdùng`muiltipart/form-data`
 * *Hìnhtrướckhisubmitphảiđượcresizevềđúngkíchthước1280*736.
 * *Ítnhất1thiếtbịtrongtrongđịađiểmcóonlinethìmớiđăngkíuserđược.
 * *Nếucónhiềuthiếtbịtrongtrongcùng1địađiểm,thìsaukhiđăngkíthànhcông,tấtcảthiếtbịđềuđượcđăngkíuserđó
 * *CầnthiếtlậptimeoutchoAPInàytừ10-30s
 * *ĐốitáccầngửiIDcủangườimuốnđăngkíquachoHANETthôngquaparamaliasID.HANETsẽdùngIDnàyđểsửdụngchocácAPIkhácnhưupdate,deletengườiđăngkí
 *
 * *NếuđốitáckhôngcầnđặtIDriêngchouserthìkhôngcầntruyềnparamaliasID,vàcóthểdùngpersonIDcủahanetđểsửdụngcácapiupdate,deletechouser
 */
export declare const personRegister: <ThrowOnError extends boolean = false>(options?: Options<PersonRegisterData, ThrowOnError>) => import('./client').RequestResult<PersonRegisterResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/registerByUrl
 *
 * Đăngkíhìnhảnhkhuônmặtvớitàikhoảnuser.
 *
 * *Đểthiếtbịnhậndạngđượcngườinàođóthìcầnphảiđăngkíhìnhảnhcủangườiđóđóvớihệthống
 * *HANETquảnlýdữliệukhuônmặttheođịađiểmchứkhôngphảitheothiếtbị,nêncácthiếtbịnếuđượcthêmvàocùng1địađiểmthìsẽđượcđồngbộdữliệukhuônmặtvớinhau.
 * *Chỉcầndùng1hìnhlàđủđểđăngkícho1người
 *
 *
 * VàiyêucầukhidùngAPInày:
 *
 * *APIPostdùng`url`
 * *Hìnhtrướckhisubmitphảiđượcresizevềđúngkíchthước1280*736.
 * *Ítnhất1thiếtbịtrongtrongđịađiểmcóonlinethìmớiđăngkíuserđược.
 * *Nếucónhiềuthiếtbịtrongtrongcùng1địađiểm,thìsaukhiđăngkíthànhcông,tấtcảthiếtbịđềuđượcđăngkíuserđó
 * *CầnthiếtlậptimeoutchoAPInàytừ10-30s
 * *ĐốitáccầngửiIDcủangườimuốnđăngkíquachoHANETthôngquaparamaliasID.HANETsẽdùngIDnàyđểsửdụngchocácAPIkhácnhưupdate,deletengườiđăngkí
 *
 *
 * *NếuđốitáckhôngcầnđặtIDriêngchouserthìkhôngcầntruyềnparamaliasID,vàcóthểdùngpersonIDcủahanetđểsửdụngcácapiupdate,deletechouser
 */
export declare const personRegisterByUrl: <ThrowOnError extends boolean = false>(options?: Options<PersonRegisterByUrlData, ThrowOnError>) => import('./client').RequestResult<PersonRegisterByUrlResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/updateByFaceImage
 *
 * Trongtrườnghợpđãđăngkíhìnhảnhcủa1người,vàngườiđóđãhoạtđộng1thờigiantronghệthống,nếucónhucầuthayđổihìnhảnhnhậndiện,thìcóthểsửdụngAPInày,thìthayvìphảixoáhìnhngườicũsauđóđăngkílại,việcnàysẽdẫnđếnvấnđềlàmấthếtdữliệucủangườiđó
 *
 * VàiyêucầukhidùngAPInày:
 *
 * *APIPostdùng`muiltipart/form-data`
 * *Hìnhtrướckhisubmitphảiđượcresizevềđúngkíchthước1280*738.
 * *Ítnhất1thiếtbịtrongtrongđịađiểmcóonlinethìmớiđăngkíuserđược.
 * *Nếucónhiềuthiếtbịtrongtrongcùng1địađiểm,thìsaukhiđăngkíthànhcông,tấtcảthiếtbịđềuđượcđăngkíuserđó.
 * *ĐốitáccóthểdùngparamaliasIDhoặcpersonIDlàIDcủangườicầnupdatehình
 * *CầnthiếtlậptimeoutchoAPInàytừ10-30s
 */
export declare const personUpdateByFaceImage: <ThrowOnError extends boolean = false>(options?: Options<PersonUpdateByFaceImageData, ThrowOnError>) => import('./client').RequestResult<PersonUpdateByFaceImageResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/updateByFaceImageByAliasID
 *
 * Trongtrườnghợpđãđăngkíhìnhảnhcủa1người,vàngườiđóđãhoạtđộng1thờigiantronghệthống,nếucónhucầuthayđổihìnhảnhnhậndiện,thìcóthểsửdụngAPInày,thìthayvìphảixoáhìnhngườicũsauđóđăngkílại,việcnàysẽdẫnđếnvấnđềlàmấthếtdữliệucủangườiđó
 *
 *
 * VàiyêucầukhidùngAPInày:
 * -APIPostdùng`muiltipart/form-data`
 * -Hìnhtrướckhisubmitphảiđượcresizevềđúngkíchthước1280*738.
 * -Ítnhất1thiếtbịtrongtrongđịađiểmcóonlinethìmớiđăngkíuserđược.
 * -Nếucónhiềuthiếtbịtrongtrongcùng1địađiểm,thìsaukhiđăngkíthànhcông,tấtcảthiếtbịđềuđượcđăngkíuserđó
 * -CầnthiếtlậptimeoutchoAPInàytừ10-30s
 */
export declare const personUpdateByFaceImageByAliasId: <ThrowOnError extends boolean = false>(options?: Options<PersonUpdateByFaceImageByAliasIdData, ThrowOnError>) => import('./client').RequestResult<PersonUpdateByFaceImageByAliasIdResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/updateByFaceImageByPersonID
 *
 * Trongtrườnghợpđãđăngkíhìnhảnhcủa1người,vàngườiđóđãhoạtđộng1thờigiantronghệthống,nếucónhucầuthayđổihìnhảnhnhậndiện,thìcóthểsửdụngAPInày,thìthayvìphảixoáhìnhngườicũsauđóđăngkílại,việcnàysẽdẫnđếnvấnđềlàmấthếtdữliệucủangườiđó
 *
 *
 * VàiyêucầukhidùngAPInày:
 * -APIPostdùng`muiltipart/form-data`
 * -Hìnhtrướckhisubmitphảiđượcresizevềđúngkíchthước1280*738.
 * -Ítnhất1thiếtbịtrongtrongđịađiểmcóonlinethìmớiđăngkíuserđược.
 * -Nếucónhiềuthiếtbịtrongtrongcùng1địađiểm,thìsaukhiđăngkíthànhcông,tấtcảthiếtbịđềuđượcđăngkíuserđó
 * -CầnthiếtlậptimeoutchoAPInàytừ10-30s
 */
export declare const personUpdateByFaceImageByPersonId: <ThrowOnError extends boolean = false>(options?: Options<PersonUpdateByFaceImageByPersonIdData, ThrowOnError>) => import('./client').RequestResult<PersonUpdateByFaceImageByPersonIdResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/updateByFaceUrl
 *
 * Trongtrườnghợpđãđăngkíhìnhảnhcủa1người,vàngườiđóđãhoạtđộng1thờigiantronghệthống,nếucónhucầuthayđổihìnhảnhnhậndiện,thìcóthểsửdụngAPInày,thìthayvìphảixoáhìnhngườicũsauđóđăngkílại,việcnàysẽdẫnđếnvấnđềlàmấthếtdữliệucủangườiđó
 *
 *
 * VàiyêucầukhidùngAPInày:
 * -APIPostdùng`url`
 * -Hìnhtrướckhisubmitphảiđượcresizevềđúngkíchthước1280*738.
 * -Ítnhất1thiếtbịtrongtrongđịađiểmcóonlinethìmớiđăngkíuserđược.
 * -Nếucónhiềuthiếtbịtrongtrongcùng1địađiểm,thìsaukhiđăngkíthànhcông,tấtcảthiếtbịđềuđượcđăngkíuserđó
 * -CầnthiếtlậptimeoutchoAPInàytừ10-30s
 */
export declare const personUpdateByFaceUrl: <ThrowOnError extends boolean = false>(options?: Options<PersonUpdateByFaceUrlData, ThrowOnError>) => import('./client').RequestResult<PersonUpdateByFaceUrlResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/updateByFaceUrlByAliasID
 *
 * Trongtrườnghợpđãđăngkíhìnhảnhcủa1người,vàngườiđóđãhoạtđộng1thờigiantronghệthống,nếucónhucầuthayđổihìnhảnhnhậndiện,thìcóthểsửdụngAPInày,thìthayvìphảixoáhìnhngườicũsauđóđăngkílại,việcnàysẽdẫnđếnvấnđềlàmấthếtdữliệucủangườiđó
 *
 *
 * VàiyêucầukhidùngAPInày:
 * -APIPostdùng`url`
 * -Hìnhtrướckhisubmitphảiđượcresizevềđúngkíchthước1280*738.
 * -Ítnhất1thiếtbịtrongtrongđịađiểmcóonlinethìmớiđăngkíuserđược.
 * -Nếucónhiềuthiếtbịtrongtrongcùng1địađiểm,thìsaukhiđăngkíthànhcông,tấtcảthiếtbịđềuđượcđăngkíuserđó
 * -CầnthiếtlậptimeoutchoAPInàytừ10-30s
 */
export declare const personUpdateByFaceUrlByAliasId: <ThrowOnError extends boolean = false>(options?: Options<PersonUpdateByFaceUrlByAliasIdData, ThrowOnError>) => import('./client').RequestResult<PersonUpdateByFaceUrlByAliasIdResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/updateByFaceUrlByPersonID
 *
 * Trongtrườnghợpđãđăngkíhìnhảnhcủa1người,vàngườiđóđãhoạtđộng1thờigiantronghệthống,nếucónhucầuthayđổihìnhảnhnhậndiện,thìcóthểsửdụngAPInày,thìthayvìphảixoáhìnhngườicũsauđóđăngkílại,việcnàysẽdẫnđếnvấnđềlàmấthếtdữliệucủangườiđó
 *
 *
 * VàiyêucầukhidùngAPInày:
 * -APIPostdùng`url`
 * -Hìnhtrướckhisubmitphảiđượcresizevềđúngkíchthước1280*738.
 * -Ítnhất1thiếtbịtrongtrongđịađiểmcóonlinethìmớiđăngkíuserđược.
 * -Nếucónhiềuthiếtbịtrongtrongcùng1địađiểm,thìsaukhiđăngkíthànhcông,tấtcảthiếtbịđềuđượcđăngkíuserđó
 * -CầnthiếtlậptimeoutchoAPInàytừ10-30s
 */
export declare const personUpdateByFaceUrlByPersonId: <ThrowOnError extends boolean = false>(options?: Options<PersonUpdateByFaceUrlByPersonIdData, ThrowOnError>) => import('./client').RequestResult<PersonUpdateByFaceUrlByPersonIdResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/get-list-by-place[Deprecate]
 *
 * Lấydanhsáchpersoncủamộtđịađiểm.
 *
 * Thôngtinresponsebaogồmcácthôngtincơbảnlà:personID,name,avatar.
 *
 * -apicóhỗtrợphântrangtheopage,size.
 * -mặcđịnhsẽtrảvề50item,nếumuốnlấynhiềuhơnnữathìtruyềnthêmparampagevàsize.
 */
export declare const personGetListByPlaceDeprecated: <ThrowOnError extends boolean = false>(options?: Options<PersonGetListByPlaceDeprecatedData, ThrowOnError>) => import('./client').RequestResult<PersonGetListByPlaceDeprecatedResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/getListByPlace
 *
 * Lấydanhsáchpersoncủamộtđịađiểm.
 *
 * Thôngtinresponsebaogồmcácthôngtincơbảnlà:personID,name,avatar.
 *
 * -apicóhỗtrợphântrangtheopage,size.
 * -mặcđịnhsẽtrảvề50item,nếumuốnlấynhiềuhơnnữathìtruyềnthêmparampagevàsize.
 */
export declare const personGetListByPlace: <ThrowOnError extends boolean = false>(options?: Options<PersonGetListByPlaceData, ThrowOnError>) => import('./client').RequestResult<PersonGetListByPlaceResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/getTotalPersonByPlaceID
 *
 * APIhỗtrợđốitácLấytổngsốpersoncủamộtđịađiểm.
 *
 * Thôngtinresponsesẽtrảvềsốlượngpersoncủamộtđịađiểm.
 */
export declare const personGetTotalPersonByPlaceId: <ThrowOnError extends boolean = false>(options?: Options<PersonGetTotalPersonByPlaceIdData, ThrowOnError>) => import('./client').RequestResult<PersonGetTotalPersonByPlaceIdResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/get-list-by-aliasID-all-place[Deprecate]
 *
 * LấydanhsáchpersoncủatấtcảđịađiểmthôngquaaliasID.Thôngtinresponsebaogồmcácthôngtincơbảnlà:personID,name,avatar.
 */
export declare const personGetListByAliasIdAllPlaceDeprecated: <ThrowOnError extends boolean = false>(options?: Options<PersonGetListByAliasIdAllPlaceDeprecatedData, ThrowOnError>) => import('./client').RequestResult<PersonGetListByAliasIdAllPlaceDeprecatedResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/getListByAliasIDAllPlace
 *
 * LấydanhsáchpersoncủatấtcảđịađiểmthôngquaaliasID.Thôngtinresponsebaogồmcácthôngtincơbảnlà:personID,name,avatar.
 */
export declare const personGetListByAliasIdAllPlace: <ThrowOnError extends boolean = false>(options?: Options<PersonGetListByAliasIdAllPlaceData, ThrowOnError>) => import('./client').RequestResult<PersonGetListByAliasIdAllPlaceResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/getListByAliasID
 *
 * LấydanhsáchpersoncủatấtcảđịađiểmthôngquaaliasIDvàdanhsáchplaceID
 * Thôngtinresponsebaogồmcácthôngtincơbảnlà:personID,name,avatar.
 */
export declare const personGetListByAliasId: <ThrowOnError extends boolean = false>(options?: Options<PersonGetListByAliasIdData, ThrowOnError>) => import('./client').RequestResult<PersonGetListByAliasIdResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/getUserInfoByAliasID
 *
 * LấydanhsáchpersoncủatấtcảđịađiểmthôngquaaliasID.Thôngtinresponsebaogồmcácthôngtincơbảnlà:personID,name,avatar.
 */
export declare const personGetUserInfoByAliasId: <ThrowOnError extends boolean = false>(options?: Options<PersonGetUserInfoByAliasIdData, ThrowOnError>) => import('./client').RequestResult<PersonGetUserInfoByAliasIdResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/getUserInfoByPersonID
 *
 * Lấythôngtincủa1usertheopersonID
 */
export declare const personGetUserInfoByPersonId: <ThrowOnError extends boolean = false>(options?: Options<PersonGetUserInfoByPersonIdData, ThrowOnError>) => import('./client').RequestResult<PersonGetUserInfoByPersonIdResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/remove
 *
 * XóafacetheoaliasIDởtấtcảđịađiểmmàuserđangquảnlý
 */
export declare const personRemove: <ThrowOnError extends boolean = false>(options?: Options<PersonRemoveData, ThrowOnError>) => import('./client').RequestResult<PersonRemoveResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/removeByPlace
 *
 * XóafacetheoaliasIDở1địađiểmnàođómàuserđangquảnlý
 */
export declare const personRemoveByPlace: <ThrowOnError extends boolean = false>(options?: Options<PersonRemoveByPlaceData, ThrowOnError>) => import('./client').RequestResult<PersonRemoveByPlaceResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/removePersonByListAliasID
 *
 * XóafacetheodanhsáchaliasIDởnhữngđịađiểmmàuserđangquảnlý
 */
export declare const personRemovePersonByListAliasId: <ThrowOnError extends boolean = false>(options?: Options<PersonRemovePersonByListAliasIdData, ThrowOnError>) => import('./client').RequestResult<PersonRemovePersonByListAliasIdResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/removeAllPersonInPlace
 *
 * Xóatấtcảfacetại1địađiểmmàuserđangquảnlý
 */
export declare const personRemoveAllPersonInPlace: <ThrowOnError extends boolean = false>(options?: Options<PersonRemoveAllPersonInPlaceData, ThrowOnError>) => import('./client').RequestResult<PersonRemoveAllPersonInPlaceResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/removePersonByID
 *
 * XóafacetheopersonIDmàuserđangquảnlý
 */
export declare const personRemovePersonById: <ThrowOnError extends boolean = false>(options?: Options<PersonRemovePersonByIdData, ThrowOnError>) => import('./client').RequestResult<PersonRemovePersonByIdResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/update
 *
 * ChophépthayđổicácthôngtintextcủangườiđãđăngkíhìnhảnhvớiHANET
 * ĐốitácCóthểdùngaliasIDhoặcpersonIDđểupdatethôngtinchoperson.
 */
export declare const personUpdate: <ThrowOnError extends boolean = false>(options?: Options<PersonUpdateData, ThrowOnError>) => import('./client').RequestResult<PersonUpdateResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/updateInfo
 *
 * ChophépthayđổicácthôngtintextcủangườiđãđăngkíhìnhảnhvớiHANET.
 * ĐốitácCóthểdùngaliasIDhoặcpersonIDđểupdatethôngtinchoperson.
 */
export declare const personUpdateInfo: <ThrowOnError extends boolean = false>(options?: Options<PersonUpdateInfoData, ThrowOnError>) => import('./client').RequestResult<PersonUpdateInfoResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/updateAliasID
 *
 * HANETsửdụngpersonIDđểđịnhdanhthôngtinngườiđăngkíhìnhảnh.ĐốitácquảnlýbằngIDcủariêngmình,thôngquaparamaliasID.Tuynhiên,cótrườnghợplàuserdùngAppcủaHANETđểđăngkíhìnhảnhngườinàođó.Khiđó,ngườimớiđượcđăngkínàysẽchỉcópersonIDmàkhôngcóaliasID.
 *
 * APInàychophépđốitáccậpnhậtlạialiasIDcủamình.
 */
export declare const personUpdateAliasId: <ThrowOnError extends boolean = false>(options?: Options<PersonUpdateAliasIdData, ThrowOnError>) => import('./client').RequestResult<PersonUpdateAliasIdResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/takeFacePicture
 *
 * APInàychophépđốitácchụpảnhcủamộtusertrướccamera.
 */
export declare const personTakeFacePicture: <ThrowOnError extends boolean = false>(options?: Options<PersonTakeFacePictureData, ThrowOnError>) => import('./client').RequestResult<PersonTakeFacePictureResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/getCheckinByPlaceIdInDay
 *
 * ChophépliệtkêdatacheckintrongcùngmộtngàycủatấtcảnhữngngườiđãđăngkínhậndiệnvớiHANET.
 *
 * Lấydanhsáchcheckintheodạngphântrang.mặcđịnhsẽtrảvề500itemnếukhôngtruyềnvàopagesize.
 *
 * *placeIDlàIDcủađịađiểmmuốnlấydatacheckin
 * *date:thờigiancầnlấydatacheckin,ngàyđịnhdạngyyyy-mm-dd
 * *devices:làdanhsáchdevicemuốnfilterđểlấydatacheckin.
 * Nếukhôngtruyềnparamdevicesthìsẽmặcđịnhlấyhếtdatacheckincủatấtcảdevicetrongplaceđó.
 * *exDevices:filterngoạitrừdanhsáchdevice,danhsáchiddevicecáchnhaubởidấuphẩy.
 * *exType:filterngoạitrừdanhsáchexType.DanhsáchidexTypecáchnhaubởidấuphẩytrongđó0:nhânviên,1:kháchhàng,2:ngườilạ
 * *personIDs:filtertheodanhsáchidperson,idpersoncáchnhaubởidấuphẩy.
 * *aliasIDs:filtertheodanhsáchidalias,idaliascáchnhaubởidấuphẩy.
 * *page:sốpagecầnlấydata
 * *size:sốlượngitemcầnlấycủa1page.(tốiđalà500item)
 */
export declare const personGetCheckinByPlaceIdInDay: <ThrowOnError extends boolean = false>(options?: Options<PersonGetCheckinByPlaceIdInDayData, ThrowOnError>) => import('./client').RequestResult<PersonGetCheckinByPlaceIdInDayResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/getTotalCheckinByPlaceIdInDay
 *
 * ChophéplấytổngcheckintheoplaceIDtrongmộtngày.
 *
 * *placeIDlàIDcủađịađiểmmuốnlấydatacheckin
 * *devices:làdanhsáchdevicemuốnfilterđểlấydatacheckin.
 * Nếukhôngtruyềnparamdevicesthìsẽmặcđịnhlấyhếtdatacheckincủatấtcảdevicetrongplaceđó.
 * *exDevices:filterngoạitrừdanhsáchdevice,danhsáchiddevicecáchnhaubởidấuphẩy.
 * *exType:filterngoạitrừdanhsáchexType.DanhsáchidexTypecáchnhaubởidấuphẩytrongđó0:nhânviên,1:kháchhàng,2:ngườilạ
 * *aliasID:filtertheoaliasID
 * *personID:filtertheopersonID
 */
export declare const personGetTotalCheckinByPlaceIdInDay: <ThrowOnError extends boolean = false>(options?: Options<PersonGetTotalCheckinByPlaceIdInDayData, ThrowOnError>) => import('./client').RequestResult<PersonGetTotalCheckinByPlaceIdInDayResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/getCheckinByPlaceIdInTimestamp
 *
 * ChophépliệtkêdatacheckintrongkhoảngthờigiancùngmộtthángnhữngngườiđãđăngkínhậndiệnvớiHANET.
 *
 * Lấydanhsáchcheckintheodạngphântrang.mặcđịnhsẽtrảvề500itemnếukhôngtruyềnvàopagesize.
 *
 * *placeIDlàIDcủađịađiểmmuốnlấydatacheckin
 * *from:thờigianbắtđầumuốnlấydatacheckin
 * *to:thờigiankếtthúcmuốnlấydatacheckin
 * *Điềukiện:
 * *from<tovàthờigianfromvàtophảitrongcùng1tháng.
 * *devices:làdanhsáchdevicemuốnfilterđểlấydatacheckin.
 * Nếukhôngtruyềnparamdevicesthìsẽmặcđịnhlấyhếtdatacheckincủatấtcảdevicetrongplaceđó.
 * *exDevices:filterngoạitrừdanhsáchdevice,danhsáchiddevicecáchnhaubởidấuphẩy.
 * *exType:filterngoạitrừdanhsáchexType.DanhsáchidexTypecáchnhaubởidấuphẩytrongđó0:nhânviên,1:kháchhàng,2:ngườilạ
 * *personIDs:filtertheodanhsáchidperson,idpersoncáchnhaubởidấuphẩy.
 * *aliasIDs:filtertheodanhsáchidalias,idaliascáchnhaubởidấuphẩy.
 * *page:sốpagecầnlấydata
 * *size:sốlượngitemcầnlấycủa1page.(tốiđa500item)
 */
export declare const personGetCheckinByPlaceIdInTimestamp: <ThrowOnError extends boolean = false>(options?: Options<PersonGetCheckinByPlaceIdInTimestampData, ThrowOnError>) => import('./client').RequestResult<PersonGetCheckinByPlaceIdInTimestampResponses, unknown, ThrowOnError, "fields">;
/**
 * /person/getTotalCheckinByPlaceIdInTimestamp
 *
 * Chophéplấytotalcheckintrongkhoảngthờigiancùngmộttháng.
 *
 * *placeIDlàIDcủađịađiểmmuốnlấydatacheckin
 * *from:thờigianbắtđầumuốnlấydatacheckin
 * *to:thờigiankếtthúcmuốnlấydatacheckin
 * *Điềukiện:
 * *from<to
 * *devices:làdanhsáchdevicemuốnfilterđểlấydatacheckin.
 * Nếukhôngtruyềnparamdevicesthìsẽmặcđịnhlấyhếtdatacheckincủatấtcảdevicetrongplaceđó.
 * *exDevices:filterngoạitrừdanhsáchdevice,danhsáchiddevicecáchnhaubởidấuphẩy.
 * *exType:filterngoạitrừdanhsáchexType.DanhsáchidexTypecáchnhaubởidấuphẩytrongđó0:nhânviên,1:kháchhàng,2:ngườilạ
 * *aliasID:filtertheoaliasID
 * *personID:filtertheopersonID
 */
export declare const personGetTotalCheckinByPlaceIdInTimestamp: <ThrowOnError extends boolean = false>(options?: Options<PersonGetTotalCheckinByPlaceIdInTimestampData, ThrowOnError>) => import('./client').RequestResult<PersonGetTotalCheckinByPlaceIdInTimestampResponses, unknown, ThrowOnError, "fields">;
/**
 * /profile/getProfile
 *
 * Lấythôngtinprofilecủaaccess_tokenhiệntại
 */
export declare const profileGetProfile: <ThrowOnError extends boolean = false>(options?: Options<ProfileGetProfileData, ThrowOnError>) => import('./client').RequestResult<ProfileGetProfileResponses, unknown, ThrowOnError, "fields">;
/**
 * /department/list
 *
 * APIchophéplấydanhsáchphòngbancủamộtplaceID.
 *
 * cóthểfiltertheonamecủaphòngban.
 *
 * Getlistphòngbancóphântrangtheopagevàsize.
 */
export declare const departmentList: <ThrowOnError extends boolean = false>(options?: Options<DepartmentListData, ThrowOnError>) => import('./client').RequestResult<DepartmentListResponses, unknown, ThrowOnError, "fields">;
/**
 * /department/list-person
 *
 * APIchophéplấydanhsáchpersoncủamộtphòngban.
 *
 * Cóphântrangtheopagesize.mỗipagelấytốiđa50item
 */
export declare const departmentListPerson: <ThrowOnError extends boolean = false>(options?: Options<DepartmentListPersonData, ThrowOnError>) => import('./client').RequestResult<DepartmentListPersonResponses, unknown, ThrowOnError, "fields">;
/**
 * /department/create
 *
 * APItạomộtphòngbantheoplaceID,baogồmplaceID,tênvàmôtảvềphòngban
 */
export declare const departmentCreate: <ThrowOnError extends boolean = false>(options?: Options<DepartmentCreateData, ThrowOnError>) => import('./client').RequestResult<DepartmentCreateResponses, unknown, ThrowOnError, "fields">;
/**
 * /department/update
 *
 * APIchophépchỉnhsửatênvàmôtảcủamộtphòngban.
 */
export declare const departmentUpdate: <ThrowOnError extends boolean = false>(options?: Options<DepartmentUpdateData, ThrowOnError>) => import('./client').RequestResult<DepartmentUpdateResponses, unknown, ThrowOnError, "fields">;
/**
 * /department/remove
 *
 * APIchophépđốitácxoámộtphòngban.
 */
export declare const departmentRemove: <ThrowOnError extends boolean = false>(options?: Options<DepartmentRemoveData, ThrowOnError>) => import('./client').RequestResult<DepartmentRemoveResponses, unknown, ThrowOnError, "fields">;
/**
 * /department/add-person
 *
 * APIchophépđốitácthêmmộthoặcnhiềupersonvàophòngban.
 *
 * Mỗiidpersoncáchnhaubằngdấuphẩy
 */
export declare const departmentAddPerson: <ThrowOnError extends boolean = false>(options?: Options<DepartmentAddPersonData, ThrowOnError>) => import('./client').RequestResult<DepartmentAddPersonResponses, unknown, ThrowOnError, "fields">;
/**
 * /department/remove-person
 *
 * APIchophépxoámộtpersonrakhỏiphòngban
 */
export declare const departmentRemovePerson: <ThrowOnError extends boolean = false>(options?: Options<DepartmentRemovePersonData, ThrowOnError>) => import('./client').RequestResult<DepartmentRemovePersonResponses, unknown, ThrowOnError, "fields">;
//# sourceMappingURL=sdk.gen.d.ts.map