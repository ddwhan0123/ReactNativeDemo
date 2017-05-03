'use strict'

import * as TYPES from '../actiontypes/type';

export function do_beginfun(beginText) {
    return { type: TYPES.DO_BEGIN, textValue: beginText, }
}

export function do_done(doneText) {
    return { type: TYPES.DO_DONE, textValue: doneText, }
}

export function do_doing(doingText) {
    return { type: TYPES.DO_DOING, textValue: doingText, }
}