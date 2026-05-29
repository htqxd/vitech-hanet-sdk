export type ClientOptions = {
    baseUrl: 'https://partner.hanet.ai' | 'https://oauth.hanet.com' | (string & {});
};
export type BaseResponse = {
    /**
     * 1:Requestthànhcông.Khác1:Requestthấtbại,cólỗixảyra.
     */
    returnCode: number;
    /**
     * Thôngbáolỗihoặctrạngtháicủayêucầu.
     */
    returnMessage: string;
    /**
     * DữliệutrảvềcụthểcủatừngAPI.
     */
    data?: {
        [key: string]: unknown;
    } | null;
};
export type PartnerUpdateTokenResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        [key: string]: unknown;
    } | null;
};
export type PartnerAddPlacePartnerResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        [key: string]: unknown;
    } | null;
};
export type PartnerRemovePlacePartnerResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        [key: string]: unknown;
    } | null;
};
export type PartnerRemoveUserPartnerResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        [key: string]: unknown;
    } | null;
};
export type PartnerGetListUserPartnerResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: Array<{
        [key: string]: unknown;
    }>;
};
export type PlaceGetPlacesResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: Array<{
        [key: string]: unknown;
    }>;
};
export type PlaceAddPlaceResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        address?: string;
        name?: string;
        id?: number;
        userID?: number;
    };
};
export type PlaceUpdatePlaceResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        [key: string]: unknown;
    } | null;
};
export type PlaceRemovePlaceResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        [key: string]: unknown;
    } | null;
};
export type PlaceGetPlaceInfoResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        address?: string;
        name?: string;
        id?: number;
        userID?: number;
    };
};
export type DeviceGetListDeviceResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: Array<{
        [key: string]: unknown;
    }>;
};
export type DeviceGetDeviceInfoResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        placeID?: number;
        deviceID?: string;
        deviceName?: string;
        placeName?: string;
    };
};
export type DeviceGetListDeviceByPlaceResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: Array<{
        [key: string]: unknown;
    }>;
};
export type DeviceUpdateDeviceResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        [key: string]: unknown;
    } | null;
};
export type DeviceSetDeviceMqttResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        [key: string]: unknown;
    } | null;
};
export type DeviceGetConnectionStatusResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        C20371B078?: boolean;
        C20371B302?: boolean;
        C20371B093?: boolean;
    };
};
export type PersonRegisterResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        aliasID?: string;
        name?: string;
        title?: string;
    };
};
export type PersonRegisterByUrlResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        file?: string;
        aliasID?: string;
        name?: string;
        personID?: string;
        title?: string;
    };
};
export type PersonUpdateByFaceImageResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        path?: string;
    };
};
export type PersonUpdateByFaceImageByAliasIdResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        path?: string;
    };
};
export type PersonUpdateByFaceImageByPersonIdResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        path?: string;
    };
};
export type PersonUpdateByFaceUrlResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        path?: string;
    };
};
export type PersonUpdateByFaceUrlByAliasIdResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        path?: string;
    };
};
export type PersonUpdateByFaceUrlByPersonIdResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        path?: string;
    };
};
export type PersonGetListByPlaceResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: Array<{
        [key: string]: unknown;
    }>;
};
export type PersonGetTotalPersonByPlaceIdResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: number;
};
export type PersonGetListByAliasIdAllPlaceResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: Array<{
        [key: string]: unknown;
    }>;
};
export type PersonGetListByAliasIdResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: Array<{
        [key: string]: unknown;
    }>;
};
export type PersonGetUserInfoByAliasIdResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: Array<{
        [key: string]: unknown;
    }>;
};
export type PersonGetUserInfoByPersonIdResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        aliasID?: string;
        sex?: number;
        name?: string;
        id?: string;
        avatar?: string;
        title?: string;
        type?: number;
        age?: number;
    };
};
export type PersonRemoveResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: Array<{
        [key: string]: unknown;
    }>;
};
export type PersonRemoveByPlaceResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        [key: string]: unknown;
    } | null;
};
export type PersonRemovePersonByListAliasIdResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: Array<{
        [key: string]: unknown;
    }>;
};
export type PersonRemoveAllPersonInPlaceResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        [key: string]: unknown;
    } | null;
};
export type PersonRemovePersonByIdResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        [key: string]: unknown;
    } | null;
};
export type PersonUpdateResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        [key: string]: unknown;
    } | null;
};
export type PersonUpdateInfoResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        [key: string]: unknown;
    } | null;
};
export type PersonUpdateAliasIdResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        [key: string]: unknown;
    } | null;
};
export type PersonTakeFacePictureResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        [key: string]: unknown;
    } | null;
};
export type PersonGetCheckinByPlaceIdInDayResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: Array<{
        [key: string]: unknown;
    }>;
};
export type PersonGetTotalCheckinByPlaceIdInDayResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: number;
};
export type PersonGetCheckinByPlaceIdInTimestampResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: Array<{
        [key: string]: unknown;
    }>;
};
export type PersonGetTotalCheckinByPlaceIdInTimestampResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: number;
};
export type ProfileGetProfileResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        name?: string;
        id?: number;
        email?: string;
    };
};
export type DepartmentListResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        count?: string;
        hits?: Array<{
            [key: string]: unknown;
        }>;
        totals?: string;
    };
};
export type DepartmentListPersonResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: Array<{
        [key: string]: unknown;
    }>;
};
export type DepartmentCreateResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        createdAt?: string;
        desc?: string;
        enable?: number;
        id?: number;
        name?: string;
        numEmployee?: string;
        placeId?: string;
        status?: number;
        updatedAt?: string;
    };
};
export type DepartmentUpdateResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        [key: string]: unknown;
    } | null;
};
export type DepartmentRemoveResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        [key: string]: unknown;
    } | null;
};
export type DepartmentAddPersonResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        [key: string]: unknown;
    } | null;
};
export type DepartmentRemovePersonResponse = {
    /**
     * 1:Thànhcông.Khác1:Lỗi.
     */
    returnCode: number;
    returnMessage: string;
    data?: {
        [key: string]: unknown;
    } | null;
};
export type Oauth2AuthorizeData = {
    body?: never;
    path?: never;
    query: {
        /**
         * HANETAPIhỗtrợ2loạiGranttypelà"AuthorizationCode"và"Implicit"
         */
        response_type: string;
        /**
         * client_idđượcHANETcấpriêng
         */
        client_id: string;
        /**
         * callbackURLcủađốitác,nếuclientapproval,HANETsẽgọi<redirect_uri>?code=AUTHORIZATION_CODE
         */
        redirect_uri: string;
        /**
         * Thamsốscope
         */
        scope: string;
    };
    url: '/oauth2/authorize';
};
export type Oauth2AuthorizeResponses = {
    /**
     * Thànhcông
     */
    200: BaseResponse;
};
export type Oauth2AuthorizeResponse = Oauth2AuthorizeResponses[keyof Oauth2AuthorizeResponses];
export type TokenData = {
    body?: {
        /**
         * Thamsốgrant_type
         */
        grant_type: string;
        /**
         * client_idđượcHANETcấpriêng
         */
        client_id: string;
        /**
         * Thamsốclient_secret
         */
        client_secret: string;
        /**
         * Thamsốrefresh_token
         */
        refresh_token: string;
    };
    path?: never;
    query?: never;
    url: '/token';
};
export type TokenResponses = {
    /**
     * Thànhcông
     */
    200: BaseResponse;
};
export type TokenResponse = TokenResponses[keyof TokenResponses];
export type PartnerUpdateTokenData = {
    body?: {
        /**
         * access_tokenlấyđượctừOAuth2
         */
        access_token: string;
        /**
         * tokencủapartner,tươngứngvớiuserhiệntại
         */
        partner_token: string;
    };
    path?: never;
    query?: never;
    url: '/partner/updateToken';
};
export type PartnerUpdateTokenResponses = {
    /**
     * Thànhcông
     */
    200: PartnerUpdateTokenResponse;
};
export type PartnerUpdateTokenResponse2 = PartnerUpdateTokenResponses[keyof PartnerUpdateTokenResponses];
export type PartnerAddPlacePartnerData = {
    body?: {
        /**
         * token
         */
        access_token: string;
        /**
         * danhsáchplaceidcủađịađiểmmuốnthêm
         */
        placeID: string;
        /**
         * Thamsốpartner_token
         */
        partner_token: string;
    };
    path?: never;
    query?: never;
    url: '/partner/addPlacePartner';
};
export type PartnerAddPlacePartnerResponses = {
    /**
     * Thànhcông
     */
    200: PartnerAddPlacePartnerResponse;
};
export type PartnerAddPlacePartnerResponse2 = PartnerAddPlacePartnerResponses[keyof PartnerAddPlacePartnerResponses];
export type PartnerRemovePlacePartnerData = {
    body?: {
        /**
         * token
         */
        access_token: string;
        /**
         * danhsáchplaceidcủađịađiểmmuốnxóa
         */
        placeID: string;
    };
    path?: never;
    query?: never;
    url: '/partner/removePlacePartner';
};
export type PartnerRemovePlacePartnerResponses = {
    /**
     * Thànhcông
     */
    200: PartnerRemovePlacePartnerResponse;
};
export type PartnerRemovePlacePartnerResponse2 = PartnerRemovePlacePartnerResponses[keyof PartnerRemovePlacePartnerResponses];
export type PartnerRemoveUserPartnerData = {
    body?: {
        /**
         * token
         */
        access_token: string;
        /**
         * clientIDđượcHANETcấpriêng
         */
        clientID: string;
    };
    path?: never;
    query?: never;
    url: '/partner/removeUserPartner';
};
export type PartnerRemoveUserPartnerResponses = {
    /**
     * Thànhcông
     */
    200: PartnerRemoveUserPartnerResponse;
};
export type PartnerRemoveUserPartnerResponse2 = PartnerRemoveUserPartnerResponses[keyof PartnerRemoveUserPartnerResponses];
export type PartnerGetListUserPartnerData = {
    body?: {
        /**
         * token
         */
        access_token: string;
    };
    path?: never;
    query?: never;
    url: '/partner/getListUserPartner';
};
export type PartnerGetListUserPartnerResponses = {
    /**
     * Thànhcông
     */
    200: PartnerGetListUserPartnerResponse;
};
export type PartnerGetListUserPartnerResponse2 = PartnerGetListUserPartnerResponses[keyof PartnerGetListUserPartnerResponses];
export type PlaceGetPlacesData = {
    body?: {
        /**
         * Thamsốtoken
         */
        token: string;
    };
    path?: never;
    query?: never;
    url: '/place/getPlaces';
};
export type PlaceGetPlacesResponses = {
    /**
     * Thànhcông
     */
    200: PlaceGetPlacesResponse;
};
export type PlaceGetPlacesResponse2 = PlaceGetPlacesResponses[keyof PlaceGetPlacesResponses];
export type PlaceAddPlaceData = {
    body?: {
        /**
         * token
         */
        token: string;
        /**
         * Tênđịađiểm
         */
        name: string;
        /**
         * Địachỉcủađịađiểm
         */
        address: string;
    };
    path?: never;
    query?: never;
    url: '/place/addPlace';
};
export type PlaceAddPlaceResponses = {
    /**
     * Thànhcông
     */
    200: PlaceAddPlaceResponse;
};
export type PlaceAddPlaceResponse2 = PlaceAddPlaceResponses[keyof PlaceAddPlaceResponses];
export type PlaceUpdatePlaceData = {
    body?: {
        /**
         * token
         */
        token: string;
        /**
         * IDcủađịađiểmmuốnchỉnhsửa
         */
        placeID: string;
        /**
         * Têncủađịađiểm
         */
        name: string;
        /**
         * Địachỉcủađịađiểm
         */
        address: string;
    };
    path?: never;
    query?: never;
    url: '/place/updatePlace';
};
export type PlaceUpdatePlaceResponses = {
    /**
     * Thànhcông
     */
    200: PlaceUpdatePlaceResponse;
};
export type PlaceUpdatePlaceResponse2 = PlaceUpdatePlaceResponses[keyof PlaceUpdatePlaceResponses];
export type PlaceRemovePlaceData = {
    body?: {
        /**
         * Thamsốtoken
         */
        token: string;
        /**
         * IDcủađịađiểm
         */
        placeID: string;
    };
    path?: never;
    query?: never;
    url: '/place/removePlace';
};
export type PlaceRemovePlaceResponses = {
    /**
     * Thànhcông
     */
    200: PlaceRemovePlaceResponse;
};
export type PlaceRemovePlaceResponse2 = PlaceRemovePlaceResponses[keyof PlaceRemovePlaceResponses];
export type PlaceGetPlaceInfoData = {
    body?: {
        /**
         * Thamsốtoken
         */
        token: string;
        /**
         * IDcủađịađiểm
         */
        placeID: string;
    };
    path?: never;
    query?: never;
    url: '/place/getPlaceInfo';
};
export type PlaceGetPlaceInfoResponses = {
    /**
     * Thànhcông
     */
    200: PlaceGetPlaceInfoResponse;
};
export type PlaceGetPlaceInfoResponse2 = PlaceGetPlaceInfoResponses[keyof PlaceGetPlaceInfoResponses];
export type DeviceGetListDeviceDeprecatedData = {
    body?: {
        /**
         * token
         */
        token: string;
    };
    path?: never;
    query?: never;
    url: '/device/get-list-device';
};
export type DeviceGetListDeviceDeprecatedResponses = {
    /**
     * Thànhcông
     */
    200: DeviceGetListDeviceResponse;
};
export type DeviceGetListDeviceDeprecatedResponse = DeviceGetListDeviceDeprecatedResponses[keyof DeviceGetListDeviceDeprecatedResponses];
export type DeviceGetListDeviceData = {
    body?: {
        /**
         * token
         */
        token: string;
    };
    path?: never;
    query?: never;
    url: '/device/getListDevice';
};
export type DeviceGetListDeviceResponses = {
    /**
     * Thànhcông
     */
    200: DeviceGetListDeviceResponse;
};
export type DeviceGetListDeviceResponse2 = DeviceGetListDeviceResponses[keyof DeviceGetListDeviceResponses];
export type DeviceGetDeviceInfoData = {
    body?: {
        /**
         * token
         */
        token: string;
        /**
         * idcủadevice
         */
        deviceID: string;
    };
    path?: never;
    query?: never;
    url: '/device/getDeviceInfo';
};
export type DeviceGetDeviceInfoResponses = {
    /**
     * Thànhcông
     */
    200: DeviceGetDeviceInfoResponse;
};
export type DeviceGetDeviceInfoResponse2 = DeviceGetDeviceInfoResponses[keyof DeviceGetDeviceInfoResponses];
export type DeviceGetListDeviceByPlaceDeprecatedData = {
    body?: {
        /**
         * Thamsốtoken
         */
        token: string;
        /**
         * idcủađịađiểmmuốnlấythiếtbị
         */
        placeID: string;
    };
    path?: never;
    query?: never;
    url: '/device/get-list-device-by-place';
};
export type DeviceGetListDeviceByPlaceDeprecatedResponses = {
    /**
     * Thànhcông
     */
    200: DeviceGetListDeviceByPlaceResponse;
};
export type DeviceGetListDeviceByPlaceDeprecatedResponse = DeviceGetListDeviceByPlaceDeprecatedResponses[keyof DeviceGetListDeviceByPlaceDeprecatedResponses];
export type DeviceGetListDeviceByPlaceData = {
    body?: {
        /**
         * Thamsốtoken
         */
        token: string;
        /**
         * idcủađịađiểmmuốnlấythiếtbị
         */
        placeID: string;
    };
    path?: never;
    query?: never;
    url: '/device/getListDeviceByPlace';
};
export type DeviceGetListDeviceByPlaceResponses = {
    /**
     * Thànhcông
     */
    200: DeviceGetListDeviceByPlaceResponse;
};
export type DeviceGetListDeviceByPlaceResponse2 = DeviceGetListDeviceByPlaceResponses[keyof DeviceGetListDeviceByPlaceResponses];
export type DeviceUpdateDeviceData = {
    body?: {
        /**
         * Thamsốtoken
         */
        token: string;
        /**
         * idcủathiếtbịmuốnchỉnhsửa
         */
        deviceID: string;
        /**
         * Têncủathiếtbịmuốnchỉnhsửa
         */
        deviceName: string;
    };
    path?: never;
    query?: never;
    url: '/device/updateDevice';
};
export type DeviceUpdateDeviceResponses = {
    /**
     * Thànhcông
     */
    200: DeviceUpdateDeviceResponse;
};
export type DeviceUpdateDeviceResponse2 = DeviceUpdateDeviceResponses[keyof DeviceUpdateDeviceResponses];
export type DeviceSetDeviceMqttData = {
    body?: {
        /**
         * Thamsốtoken
         */
        token: string;
        /**
         * idcủathiếtbịmuốnchỉnhsửa
         */
        deviceID: string;
        /**
         * DùngđểbậthoặctắttínhnăngMQTT1:ON,0:OFF
         *
         */
        enable: string;
        /**
         * urlcủaMQTTBroker
         */
        url: string;
        /**
         * usernamecủaMQTTBroker
         */
        username: string;
        /**
         * passwordcủaMQTTBroker
         */
        password: string;
        /**
         * DùngđểbậthoặctắttínhnănggửihìnhcheckinquaMQTTdướidạngBase64
         */
        image: string;
    };
    path?: never;
    query?: never;
    url: '/device/setDeviceMQTT';
};
export type DeviceSetDeviceMqttResponses = {
    /**
     * Thànhcông
     */
    200: DeviceSetDeviceMqttResponse;
};
export type DeviceSetDeviceMqttResponse2 = DeviceSetDeviceMqttResponses[keyof DeviceSetDeviceMqttResponses];
export type DeviceGetConnectionStatusDeprecatedData = {
    body?: {
        /**
         * Thamsốtoken
         */
        token: string;
        /**
         * danhsáchidcủathiếtbịmuốnlấytrạngthái
         */
        deviceIDs: string;
    };
    path?: never;
    query?: never;
    url: '/device/get-connection-status';
};
export type DeviceGetConnectionStatusDeprecatedResponses = {
    /**
     * Thànhcông
     */
    200: DeviceGetConnectionStatusResponse;
};
export type DeviceGetConnectionStatusDeprecatedResponse = DeviceGetConnectionStatusDeprecatedResponses[keyof DeviceGetConnectionStatusDeprecatedResponses];
export type DeviceGetConnectionStatusData = {
    body?: {
        /**
         * Thamsốtoken
         */
        token: string;
        /**
         * danhsáchidcủathiếtbịmuốnlấytrạngthái
         */
        deviceIDs: string;
    };
    path?: never;
    query?: never;
    url: '/device/getConnectionStatus';
};
export type DeviceGetConnectionStatusResponses = {
    /**
     * Thànhcông
     */
    200: DeviceGetConnectionStatusResponse;
};
export type DeviceGetConnectionStatusResponse2 = DeviceGetConnectionStatusResponses[keyof DeviceGetConnectionStatusResponses];
export type PersonRegisterData = {
    body?: {
        /**
         * Thamsốtoken
         */
        token: string;
        /**
         * têncủangườimuốnđăngkí
         */
        name: string;
        /**
         * Phảiresizevềđúngkíchthước1280*738(w*h),chỉhỗtrợJPG,PNG,JPEG
         */
        file: Blob | File;
        /**
         * IDcủangườicầnđăngkívàohệthống
         */
        aliasID: string;
        /**
         * IDcủađịađiểmcầnthêmnhânviên
         */
        placeID: string;
        /**
         * Chứcdanhnhânviên
         */
        title: string;
        /**
         * Nhânviên:0,Kháchhàng:1.Mặcđịnhsẽlà0
         */
        type: string;
        /**
         * GiớiTính0:Nữ,1:Nam
         */
        sex: string;
        /**
         * Tuổi
         */
        age: string;
        /**
         * Ngàysinh
         */
        dob: string;
        /**
         * idcủaphòngban
         */
        departmentID: string;
    };
    path?: never;
    query?: never;
    url: '/person/register';
};
export type PersonRegisterResponses = {
    /**
     * Thànhcông
     */
    200: PersonRegisterResponse;
};
export type PersonRegisterResponse2 = PersonRegisterResponses[keyof PersonRegisterResponses];
export type PersonRegisterByUrlData = {
    body?: {
        /**
         * Thamsốtoken
         */
        token: string;
        /**
         * têncủangườimuốnđăngkí
         */
        name: string;
        /**
         * Phảiresizevềđúngkíchthước1280*736(w*h),chỉhỗtrợJPG,PNG,JPEG
         */
        url: string;
        /**
         * IDcủangườicầnđăngkívàohệthống.
         */
        aliasID: string;
        /**
         * IDcủađịađiểmcầnthêmnhânviên
         */
        placeID: string;
        /**
         * Chứcdanhnhânviên
         */
        title: string;
        /**
         * Nhânviên:0,Kháchhàng:1.Mặcđịnhsẽlà0
         */
        type: string;
    };
    path?: never;
    query?: never;
    url: '/person/registerByUrl';
};
export type PersonRegisterByUrlResponses = {
    /**
     * Thànhcông
     */
    200: PersonRegisterByUrlResponse;
};
export type PersonRegisterByUrlResponse2 = PersonRegisterByUrlResponses[keyof PersonRegisterByUrlResponses];
export type PersonUpdateByFaceImageData = {
    body?: {
        /**
         * token
         */
        token: string;
        /**
         * Phảiresizevềđúngkíchthước1280*736,chỉhỗtrợJPG,PNG,JPEG
         */
        'file[]': Blob | File;
        /**
         * IDcủangườicầnupdatehình.
         * IDcóthểlàaliasIDhoặcpersonID
         */
        aliasID: string;
        /**
         * IDcủađịađiểm
         */
        placeID: string;
        /**
         * Thamsố
         */
        '': string;
    };
    path?: never;
    query?: never;
    url: '/person/updateByFaceImage';
};
export type PersonUpdateByFaceImageResponses = {
    /**
     * Thànhcông
     */
    200: PersonUpdateByFaceImageResponse;
};
export type PersonUpdateByFaceImageResponse2 = PersonUpdateByFaceImageResponses[keyof PersonUpdateByFaceImageResponses];
export type PersonUpdateByFaceImageByAliasIdData = {
    body?: {
        /**
         * token
         */
        token: string;
        /**
         * Phảiresizevềđúngkíchthước1280*736,chỉhỗtrợJPG,PNG,JPEG
         */
        'file[]': Blob | File;
        /**
         * IDcủangườicầnupdatehình.
         * IDCóthểdùngaliasIDhoặcpersonID
         */
        aliasID: string;
        /**
         * IDcủađịađiểm
         */
        placeID: string;
    };
    path?: never;
    query?: never;
    url: '/person/updateByFaceImageByAliasID';
};
export type PersonUpdateByFaceImageByAliasIdResponses = {
    /**
     * Thànhcông
     */
    200: PersonUpdateByFaceImageByAliasIdResponse;
};
export type PersonUpdateByFaceImageByAliasIdResponse2 = PersonUpdateByFaceImageByAliasIdResponses[keyof PersonUpdateByFaceImageByAliasIdResponses];
export type PersonUpdateByFaceImageByPersonIdData = {
    body?: {
        /**
         * token
         */
        token: string;
        /**
         * Phảiresizevềđúngkíchthước1280*736,chỉhỗtrợJPG,PNG,JPEG
         */
        'file[]': Blob | File;
        /**
         * IDcủangườicầnupdatehình.
         * IDCóthểdùngaliasIDhoặcpersonID
         */
        personID: string;
        /**
         * IDcủađịađiểm
         */
        placeID: string;
    };
    path?: never;
    query?: never;
    url: '/person/updateByFaceImageByPersonID';
};
export type PersonUpdateByFaceImageByPersonIdResponses = {
    /**
     * Thànhcông
     */
    200: PersonUpdateByFaceImageByPersonIdResponse;
};
export type PersonUpdateByFaceImageByPersonIdResponse2 = PersonUpdateByFaceImageByPersonIdResponses[keyof PersonUpdateByFaceImageByPersonIdResponses];
export type PersonUpdateByFaceUrlData = {
    body?: {
        [key: string]: unknown;
    };
    path?: never;
    query?: never;
    url: '/person/updateByFaceUrl';
};
export type PersonUpdateByFaceUrlResponses = {
    /**
     * Thànhcông
     */
    200: PersonUpdateByFaceUrlResponse;
};
export type PersonUpdateByFaceUrlResponse2 = PersonUpdateByFaceUrlResponses[keyof PersonUpdateByFaceUrlResponses];
export type PersonUpdateByFaceUrlByAliasIdData = {
    body?: {
        /**
         * Thamsốtoken
         */
        token: string;
        /**
         * urllàlinkảnhcủapersoncầnthayđổi.Phảiresizevềđúngkíchthước1280*736,chỉhỗtrợJPG,PNG,JPEG
         */
        url: string;
        /**
         * IDcủangườicầnupdatehình
         */
        aliasID: string;
        /**
         * IDcủađịađiểm
         */
        placeID: string;
    };
    path?: never;
    query?: never;
    url: '/person/updateByFaceUrlByAliasID';
};
export type PersonUpdateByFaceUrlByAliasIdResponses = {
    /**
     * Thànhcông
     */
    200: PersonUpdateByFaceUrlByAliasIdResponse;
};
export type PersonUpdateByFaceUrlByAliasIdResponse2 = PersonUpdateByFaceUrlByAliasIdResponses[keyof PersonUpdateByFaceUrlByAliasIdResponses];
export type PersonUpdateByFaceUrlByPersonIdData = {
    body?: {
        /**
         * Thamsốtoken
         */
        token: string;
        /**
         * urllàlinkảnhcủapersoncầnthayđổi.Phảiresizevềđúngkíchthước1280*736,chỉhỗtrợJPG,PNG,JPEG
         */
        url: string;
        /**
         * IDcủangườicầnupdatehình
         */
        personID: string;
        /**
         * IDcủađịađiểm
         */
        placeID: string;
    };
    path?: never;
    query?: never;
    url: '/person/updateByFaceUrlByPersonID';
};
export type PersonUpdateByFaceUrlByPersonIdResponses = {
    /**
     * Thànhcông
     */
    200: PersonUpdateByFaceUrlByPersonIdResponse;
};
export type PersonUpdateByFaceUrlByPersonIdResponse2 = PersonUpdateByFaceUrlByPersonIdResponses[keyof PersonUpdateByFaceUrlByPersonIdResponses];
export type PersonGetListByPlaceDeprecatedData = {
    body?: {
        /**
         * Thamsốtoken
         */
        token: string;
        /**
         * IDcủađịađiểm
         */
        placeID: string;
        /**
         * Nhânviên:0,Kháchàng:1,Tấtcả:-1
         */
        type: string;
    };
    path?: never;
    query?: never;
    url: '/person/get-list-by-place';
};
export type PersonGetListByPlaceDeprecatedResponses = {
    /**
     * Thànhcông
     */
    200: PersonGetListByPlaceResponse;
};
export type PersonGetListByPlaceDeprecatedResponse = PersonGetListByPlaceDeprecatedResponses[keyof PersonGetListByPlaceDeprecatedResponses];
export type PersonGetListByPlaceData = {
    body?: {
        /**
         * (required)
         */
        token: string;
        /**
         * IDcủađịađiểm(required)
         */
        placeID: string;
        /**
         * Nhânviên:0,Kháchàng:1,Tấtcả:-1
         */
        type: string;
        /**
         * sốpage
         */
        page: string;
        /**
         * sốlượngitemcầnlấytrong1page
         */
        size: string;
    };
    path?: never;
    query?: never;
    url: '/person/getListByPlace';
};
export type PersonGetListByPlaceResponses = {
    /**
     * Thànhcông
     */
    200: PersonGetListByPlaceResponse;
};
export type PersonGetListByPlaceResponse2 = PersonGetListByPlaceResponses[keyof PersonGetListByPlaceResponses];
export type PersonGetTotalPersonByPlaceIdData = {
    body?: {
        /**
         * (required)
         */
        token: string;
        /**
         * IDcủađịađiểm(required)
         */
        placeID: string;
        /**
         * Nhânviên:0,Kháchàng:1,Tấtcả:-1
         */
        type: string;
    };
    path?: never;
    query?: never;
    url: '/person/getTotalPersonByPlaceID';
};
export type PersonGetTotalPersonByPlaceIdResponses = {
    /**
     * Thànhcông
     */
    200: PersonGetTotalPersonByPlaceIdResponse;
};
export type PersonGetTotalPersonByPlaceIdResponse2 = PersonGetTotalPersonByPlaceIdResponses[keyof PersonGetTotalPersonByPlaceIdResponses];
export type PersonGetListByAliasIdAllPlaceDeprecatedData = {
    body?: {
        /**
         * Thamsốtoken
         */
        token: string;
        /**
         * ThamsốaliasID
         */
        aliasID: string;
    };
    path?: never;
    query?: never;
    url: '/person/get-list-by-aliasID-all-place';
};
export type PersonGetListByAliasIdAllPlaceDeprecatedResponses = {
    /**
     * Thànhcông
     */
    200: PersonGetListByAliasIdAllPlaceResponse;
};
export type PersonGetListByAliasIdAllPlaceDeprecatedResponse = PersonGetListByAliasIdAllPlaceDeprecatedResponses[keyof PersonGetListByAliasIdAllPlaceDeprecatedResponses];
export type PersonGetListByAliasIdAllPlaceData = {
    body?: {
        /**
         * Thamsốtoken
         */
        token: string;
        /**
         * ThamsốaliasID
         */
        aliasID: string;
    };
    path?: never;
    query?: never;
    url: '/person/getListByAliasIDAllPlace';
};
export type PersonGetListByAliasIdAllPlaceResponses = {
    /**
     * Thànhcông
     */
    200: PersonGetListByAliasIdAllPlaceResponse;
};
export type PersonGetListByAliasIdAllPlaceResponse2 = PersonGetListByAliasIdAllPlaceResponses[keyof PersonGetListByAliasIdAllPlaceResponses];
export type PersonGetListByAliasIdData = {
    body?: {
        /**
         * token
         */
        token: string;
        /**
         * aliasIDcủauser
         */
        aliasID: string;
        /**
         * cóthểtruyềndanhsáchplaceIDđểfilter(Khôngbắtbuộc)
         */
        placeIDs: string;
    };
    path?: never;
    query?: never;
    url: '/person/getListByAliasID';
};
export type PersonGetListByAliasIdResponses = {
    /**
     * Thànhcông
     */
    200: PersonGetListByAliasIdResponse;
};
export type PersonGetListByAliasIdResponse2 = PersonGetListByAliasIdResponses[keyof PersonGetListByAliasIdResponses];
export type PersonGetUserInfoByAliasIdData = {
    body?: {
        /**
         * Thamsốtoken
         */
        token: string;
        /**
         * ThamsốaliasID
         */
        aliasID: string;
    };
    path?: never;
    query?: never;
    url: '/person/getUserInfoByAliasID';
};
export type PersonGetUserInfoByAliasIdResponses = {
    /**
     * Thànhcông
     */
    200: PersonGetUserInfoByAliasIdResponse;
};
export type PersonGetUserInfoByAliasIdResponse2 = PersonGetUserInfoByAliasIdResponses[keyof PersonGetUserInfoByAliasIdResponses];
export type PersonGetUserInfoByPersonIdData = {
    body?: {
        /**
         * Thamsốtoken
         */
        token: string;
        /**
         * ThamsốpersonID
         */
        personID: string;
    };
    path?: never;
    query?: never;
    url: '/person/getUserInfoByPersonID';
};
export type PersonGetUserInfoByPersonIdResponses = {
    /**
     * Thànhcông
     */
    200: PersonGetUserInfoByPersonIdResponse;
};
export type PersonGetUserInfoByPersonIdResponse2 = PersonGetUserInfoByPersonIdResponses[keyof PersonGetUserInfoByPersonIdResponses];
export type PersonRemoveData = {
    body?: {
        /**
         * Thamsốtoken
         */
        token: string;
        /**
         * IDcủangườicầnxoáhình
         */
        aliasID: string;
    };
    path?: never;
    query?: never;
    url: '/person/remove';
};
export type PersonRemoveResponses = {
    /**
     * Thànhcông
     */
    200: PersonRemoveResponse;
};
export type PersonRemoveResponse2 = PersonRemoveResponses[keyof PersonRemoveResponses];
export type PersonRemoveByPlaceData = {
    body?: {
        /**
         * token
         */
        token: string;
        /**
         * IDcủangườicầnxoáhình
         */
        aliasID: string;
        /**
         * IDcủađịađiểm
         */
        placeID: string;
    };
    path?: never;
    query?: never;
    url: '/person/removeByPlace';
};
export type PersonRemoveByPlaceResponses = {
    /**
     * Thànhcông
     */
    200: PersonRemoveByPlaceResponse;
};
export type PersonRemoveByPlaceResponse2 = PersonRemoveByPlaceResponses[keyof PersonRemoveByPlaceResponses];
export type PersonRemovePersonByListAliasIdData = {
    body?: {
        /**
         * token
         */
        token: string;
        /**
         * danhsáchaliasIDcủangườicầnxoá
         */
        aliasIDs: string;
        /**
         * danhsáchplaceIDcóchứaaliaIDmuốnxóa
         */
        placeIDs: string;
    };
    path?: never;
    query?: never;
    url: '/person/removePersonByListAliasID';
};
export type PersonRemovePersonByListAliasIdResponses = {
    /**
     * Thànhcông
     */
    200: PersonRemovePersonByListAliasIdResponse;
};
export type PersonRemovePersonByListAliasIdResponse2 = PersonRemovePersonByListAliasIdResponses[keyof PersonRemovePersonByListAliasIdResponses];
export type PersonRemoveAllPersonInPlaceData = {
    body?: {
        /**
         * Thamsốtoken
         */
        token: string;
        /**
         * IDcủađiaạđiểmcầnxoá
         */
        placeID: string;
    };
    path?: never;
    query?: never;
    url: '/person/removeAllPersonInPlace';
};
export type PersonRemoveAllPersonInPlaceResponses = {
    /**
     * Thànhcông
     */
    200: PersonRemoveAllPersonInPlaceResponse;
};
export type PersonRemoveAllPersonInPlaceResponse2 = PersonRemoveAllPersonInPlaceResponses[keyof PersonRemoveAllPersonInPlaceResponses];
export type PersonRemovePersonByIdData = {
    body?: {
        /**
         * token
         */
        token: string;
        /**
         * IDcủangườicầnxoáhình
         */
        personID: string;
    };
    path?: never;
    query?: never;
    url: '/person/removePersonByID';
};
export type PersonRemovePersonByIdResponses = {
    /**
     * Thànhcông
     */
    200: PersonRemovePersonByIdResponse;
};
export type PersonRemovePersonByIdResponse2 = PersonRemovePersonByIdResponses[keyof PersonRemovePersonByIdResponses];
export type PersonUpdateData = {
    body?: {
        /**
         * Thamsốtoken
         */
        token: string;
        /**
         * thôngtinchỉnhsữabaogồmnamevàtitle
         */
        updates: string;
        /**
         * IDcủangườicầnupdatethôngtin.
         * CóthểdùngaliasIDhoặcpersonID
         *
         *
         *
         */
        aliasID: string;
        /**
         * IDcủađịađiểm
         */
        placeID: string;
        /**
         * ThamsốpersonID
         */
        personID: string;
    };
    path?: never;
    query?: never;
    url: '/person/update';
};
export type PersonUpdateResponses = {
    /**
     * Thànhcông
     */
    200: PersonUpdateResponse;
};
export type PersonUpdateResponse2 = PersonUpdateResponses[keyof PersonUpdateResponses];
export type PersonUpdateInfoData = {
    body?: {
        /**
         * Thamsốtoken
         */
        token: string;
        /**
         * IDcủangườicầnupdatethôngtin.
         * IDCóthểdùngaliasIDhoặcpersonID
         */
        aliasID: string;
        /**
         * IDcủađịađiểm
         */
        placeID: string;
        /**
         * namecủauser
         */
        name: string;
        /**
         * môtảuser
         */
        title: string;
    };
    path?: never;
    query?: never;
    url: '/person/updateInfo';
};
export type PersonUpdateInfoResponses = {
    /**
     * Thànhcông
     */
    200: PersonUpdateInfoResponse;
};
export type PersonUpdateInfoResponse2 = PersonUpdateInfoResponses[keyof PersonUpdateInfoResponses];
export type PersonUpdateAliasIdData = {
    body?: {
        /**
         * token
         */
        token: string;
        /**
         * persionIDcủaHANET
         */
        personID: string;
        /**
         * aliasIDcủađốitác
         */
        aliasID: string;
    };
    path?: never;
    query?: never;
    url: '/person/updateAliasID';
};
export type PersonUpdateAliasIdResponses = {
    /**
     * Thànhcông
     */
    200: PersonUpdateAliasIdResponse;
};
export type PersonUpdateAliasIdResponse2 = PersonUpdateAliasIdResponses[keyof PersonUpdateAliasIdResponses];
export type PersonTakeFacePictureData = {
    body?: {
        /**
         * token
         */
        token: string;
        /**
         * idcủadevice
         */
        deviceID: string;
    };
    path?: never;
    query?: never;
    url: '/person/takeFacePicture';
};
export type PersonTakeFacePictureResponses = {
    /**
     * Thànhcông
     */
    200: PersonTakeFacePictureResponse;
};
export type PersonTakeFacePictureResponse2 = PersonTakeFacePictureResponses[keyof PersonTakeFacePictureResponses];
export type PersonGetCheckinByPlaceIdInDayData = {
    body?: {
        /**
         * (required)
         */
        token: string;
        /**
         * (required)IDcủađịađiểm
         */
        placeID: string;
        /**
         * (required)thờigiancầnlấydatacheckin,ngàyđịnhdạngyyyy-mm-dd
         */
        date: string;
        /**
         * -0:nhânviên
         * -1:kháchhàng
         * -2:ngườilạ
         *
         * mặcđịnhthìsẽtrảvềtấtcảngườiđãcheckin,baogồmcảngườilạ,nhânviên,kháchhàng.Trườnghợpkomuốnlấyhết,vídụnhưmuốnbỏbớtngườilạrathìtruyềnvảoexType:2
         *
         * listexType:1,2:cáchnhaubằngdấuphẩy.
         *
         */
        exType: string;
        /**
         * Danhsáchdevicemuốnlấy.CácDeviceIDcáchnhaubằngdấuphẩy.
         */
        devices: string;
        /**
         * Danhsáchngoạitrừcácdevice.CácDeviceIDcáchnhaubằngdấuphẩy.
         */
        exDevices: string;
        /**
         * filtertheotype.CácIDtypecáchnhaubằngdấuphẩy
         * -0:nhânviên
         * -1:kháchhàng
         * -2:ngườilạ
         *
         */
        type: string;
        /**
         * IDcủaperson
         */
        personID: string;
        /**
         * filtertheodanhsáchidperson,idpersoncáchnhaubởidấuphẩy.
         */
        personIDs: string;
        /**
         * filtertheodanhsáchidalias,idaliascáchnhaubởidấuphẩy.
         */
        aliasIDs: string;
        /**
         * sốpage
         */
        page: string;
        /**
         * sốlượngitemcầnlấytrong1page
         */
        size: string;
    };
    path?: never;
    query?: never;
    url: '/person/getCheckinByPlaceIdInDay';
};
export type PersonGetCheckinByPlaceIdInDayResponses = {
    /**
     * Thànhcông
     */
    200: PersonGetCheckinByPlaceIdInDayResponse;
};
export type PersonGetCheckinByPlaceIdInDayResponse2 = PersonGetCheckinByPlaceIdInDayResponses[keyof PersonGetCheckinByPlaceIdInDayResponses];
export type PersonGetTotalCheckinByPlaceIdInDayData = {
    body?: {
        /**
         * (required)
         */
        token: string;
        /**
         * (required)IDcủađịađiểm
         */
        placeID: string;
        /**
         * (required)thờigiancầnlấydatacheckin,ngàyđịnhdạngyyyy-mm-dd
         */
        date: string;
        /**
         * -0:nhânviên
         * -1:kháchhàng
         * -2:ngườilạ
         *
         * mặcđịnhthìsẽtrảvềtấtcảngườiđãcheckin,baogồmcảngườilạ,nhânviên,kháchhàng.Trườnghợpkomuốnlấyhết,vídụnhưmuốnbỏbớtngườilạrathìtruyềnvảoexType:2
         *
         * listexType:1,2:cáchnhaubằngdấuphẩy.
         *
         */
        exType: string;
        /**
         * Danhsáchdevicemuốnlấy.CácDeviceIDcáchnhaubằngdấuphẩy.
         */
        devices: string;
        /**
         * Danhsáchngoạitrừcácdevice.CácDeviceIDcáchnhaubằngdấuphẩy.
         */
        exDevices: string;
        /**
         * filtertheotype.CácIDtypecáchnhaubằngdấuphẩy
         * -0:nhânviên
         * -1:kháchhàng
         * -2:ngườilạ
         *
         */
        type: string;
        /**
         * listaliasIDcủaperson,cáchnhaubằngdấu,
         */
        aliasIDs: string;
        /**
         * listIDcủaperson,cáchnhaubằngdấu,
         */
        personIDs: string;
    };
    path?: never;
    query?: never;
    url: '/person/getTotalCheckinByPlaceIdInDay';
};
export type PersonGetTotalCheckinByPlaceIdInDayResponses = {
    /**
     * Thànhcông
     */
    200: PersonGetTotalCheckinByPlaceIdInDayResponse;
};
export type PersonGetTotalCheckinByPlaceIdInDayResponse2 = PersonGetTotalCheckinByPlaceIdInDayResponses[keyof PersonGetTotalCheckinByPlaceIdInDayResponses];
export type PersonGetCheckinByPlaceIdInTimestampData = {
    body?: {
        /**
         * (required)
         */
        token: string;
        /**
         * (required)IDcủađịađiểmmuốnlấydatacheckin
         */
        placeID: string;
        /**
         * (required)thờigianbắtđầucầnlấydatacheckin,Timestamptínhtheomilisecond
         */
        from: string;
        /**
         * (required)thờigiankếtthúccầnlấydatacheckin,Timestamptínhtheomilisecond
         */
        to: string;
        /**
         * filtertheodanhsáchiddevice,iddevicecáchnhaubởidấuphẩy.
         */
        devices: string;
        /**
         * filtertheoidtype.Danhsáchidtypecáchnhaubởidấuphẩy
         * -0:nhânviên
         * -1:kháchhàng
         * -2:ngườilạ
         */
        type: string;
        /**
         * filterngoạitrừdanhsáchexType.DanhsáchidexTypecáchnhaubởidấuphẩy
         * -0:nhânviên
         * -1:kháchhàng
         * -2:ngườilạ
         */
        exType: string;
        /**
         * filterngoạitrừdanhsáchdevice,danhsáchiddevicecáchnhaubởidấuphẩy
         */
        exDevices: string;
        /**
         * aliasIDcủaperson
         */
        aliasID: string;
        /**
         * IDcủaperson
         */
        personID: string;
        /**
         * filtertheodanhsáchidperson,idpersoncáchnhaubởidấuphẩy.
         */
        personIDs: string;
        /**
         * filtertheodanhsáchidalias,idaliascáchnhaubởidấuphẩy.
         */
        aliasIDs: string;
        /**
         * sốpage
         */
        page: string;
        /**
         * sốlượngitemcầnlấytrong1page
         */
        size: string;
    };
    path?: never;
    query?: never;
    url: '/person/getCheckinByPlaceIdInTimestamp';
};
export type PersonGetCheckinByPlaceIdInTimestampResponses = {
    /**
     * Thànhcông
     */
    200: PersonGetCheckinByPlaceIdInTimestampResponse;
};
export type PersonGetCheckinByPlaceIdInTimestampResponse2 = PersonGetCheckinByPlaceIdInTimestampResponses[keyof PersonGetCheckinByPlaceIdInTimestampResponses];
export type PersonGetTotalCheckinByPlaceIdInTimestampData = {
    body?: {
        /**
         * (required)
         */
        token: string;
        /**
         * (required)IDcủađịađiểmmuốnlấydatacheckin
         */
        placeID: string;
        /**
         * (required)thờigianbắtđầucầnlấydatacheckin,Timestamptínhtheomilisecond
         */
        from: string;
        /**
         * (required)thờigiankếtthúccầnlấydatacheckin,Timestamptínhtheomilisecond
         */
        to: string;
        /**
         * filtertheodanhsáchiddevice,iddevicecáchnhaubởidấuphẩy.
         */
        devices: string;
        /**
         * filtertheoidtype.Danhsáchidtypecáchnhaubởidấuphẩy
         * -0:nhânviên
         * -1:kháchhàng
         * -2:ngườilạ
         */
        type: string;
        /**
         * filterngoạitrừdanhsáchexType.DanhsáchidexTypecáchnhaubởidấuphẩy
         * -0:nhânviên
         * -1:kháchhàng
         * -2:ngườilạ
         */
        exType: string;
        /**
         * filterngoạitrừdanhsáchdevice,danhsáchiddevicecáchnhaubởidấuphẩy
         */
        exDevices: string;
        /**
         * aliasIDcủaperson
         */
        aliasID: string;
        /**
         * IDcủaperson
         */
        personID: string;
    };
    path?: never;
    query?: never;
    url: '/person/getTotalCheckinByPlaceIdInTimestamp';
};
export type PersonGetTotalCheckinByPlaceIdInTimestampResponses = {
    /**
     * Thànhcông
     */
    200: PersonGetTotalCheckinByPlaceIdInTimestampResponse;
};
export type PersonGetTotalCheckinByPlaceIdInTimestampResponse2 = PersonGetTotalCheckinByPlaceIdInTimestampResponses[keyof PersonGetTotalCheckinByPlaceIdInTimestampResponses];
export type ProfileGetProfileData = {
    body?: {
        /**
         * Thamsốtoken
         */
        token: string;
    };
    path?: never;
    query?: never;
    url: '/profile/getProfile';
};
export type ProfileGetProfileResponses = {
    /**
     * Thànhcông
     */
    200: ProfileGetProfileResponse;
};
export type ProfileGetProfileResponse2 = ProfileGetProfileResponses[keyof ProfileGetProfileResponses];
export type DepartmentListData = {
    body?: {
        /**
         * tokencủađốitác
         */
        token: string;
        /**
         * idcuaplace
         */
        placeID: string;
        /**
         * filtertheonamecủadeparment
         */
        keyword: string;
        /**
         * sốtrang
         */
        page: string;
        /**
         * sốitemcủamỗitrang
         */
        size: string;
    };
    path?: never;
    query?: never;
    url: '/department/list';
};
export type DepartmentListResponses = {
    /**
     * Thànhcông
     */
    200: DepartmentListResponse;
};
export type DepartmentListResponse2 = DepartmentListResponses[keyof DepartmentListResponses];
export type DepartmentListPersonData = {
    body?: {
        /**
         * tokencủađốitác
         */
        token: string;
        /**
         * idcủaphòngban
         */
        departmentID: string;
        /**
         * namecủaphòngbancầnfilter
         */
        keyword: string;
        /**
         * sốtrang
         */
        page: string;
        /**
         * sốitemcủa1trang
         */
        size: string;
    };
    path?: never;
    query?: never;
    url: '/department/list-person';
};
export type DepartmentListPersonResponses = {
    /**
     * Thànhcông
     */
    200: DepartmentListPersonResponse;
};
export type DepartmentListPersonResponse2 = DepartmentListPersonResponses[keyof DepartmentListPersonResponses];
export type DepartmentCreateData = {
    body?: {
        /**
         * tokencủađốitác
         */
        token: string;
        /**
         * idcủaplacerequired
         */
        placeID: string;
        /**
         * têncủaphòngbanrequired
         */
        name: string;
        /**
         * môtảvềphòngban
         */
        desc: string;
    };
    path?: never;
    query?: never;
    url: '/department/create';
};
export type DepartmentCreateResponses = {
    /**
     * Thànhcông
     */
    200: DepartmentCreateResponse;
};
export type DepartmentCreateResponse2 = DepartmentCreateResponses[keyof DepartmentCreateResponses];
export type DepartmentUpdateData = {
    body?: {
        /**
         * tokencủađốitác
         */
        token: string;
        /**
         * idcủaphòngbanrequired
         */
        id: string;
        /**
         * namecủaphòngbanrequired
         */
        name: string;
        /**
         * môtảvềphòngban
         */
        desc: string;
    };
    path?: never;
    query?: never;
    url: '/department/update';
};
export type DepartmentUpdateResponses = {
    /**
     * Thànhcông
     */
    200: DepartmentUpdateResponse;
};
export type DepartmentUpdateResponse2 = DepartmentUpdateResponses[keyof DepartmentUpdateResponses];
export type DepartmentRemoveData = {
    body?: {
        /**
         * tokencủađốitác
         */
        token: string;
        /**
         * idcủaphòngbancầnxoá
         */
        id: string;
    };
    path?: never;
    query?: never;
    url: '/department/remove';
};
export type DepartmentRemoveResponses = {
    /**
     * Thànhcông
     */
    200: DepartmentRemoveResponse;
};
export type DepartmentRemoveResponse2 = DepartmentRemoveResponses[keyof DepartmentRemoveResponses];
export type DepartmentAddPersonData = {
    body?: {
        /**
         * tokencủađốitác
         */
        token: string;
        /**
         * idcủaphòngban
         */
        departmentID: string;
        /**
         * listidcủapersoncáchnhaubằngdấyphẩy
         */
        personIDs: string;
    };
    path?: never;
    query?: never;
    url: '/department/add-person';
};
export type DepartmentAddPersonResponses = {
    /**
     * Thànhcông
     */
    200: DepartmentAddPersonResponse;
};
export type DepartmentAddPersonResponse2 = DepartmentAddPersonResponses[keyof DepartmentAddPersonResponses];
export type DepartmentRemovePersonData = {
    body?: {
        /**
         * Thamsốtoken
         */
        token: string;
        /**
         * idcủaphòngban
         */
        departmentID: string;
        /**
         * idcủapersoncầnxoá
         */
        personID: string;
    };
    path?: never;
    query?: never;
    url: '/department/remove-person';
};
export type DepartmentRemovePersonResponses = {
    /**
     * Thànhcông
     */
    200: DepartmentRemovePersonResponse;
};
export type DepartmentRemovePersonResponse2 = DepartmentRemovePersonResponses[keyof DepartmentRemovePersonResponses];
//# sourceMappingURL=types.gen.d.ts.map