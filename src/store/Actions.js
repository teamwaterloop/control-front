/** Basic controls */
export const CHANGE_EMERGENCY_STOP = 'CHANGE_EMERGENCY_STOP'
export const CHANGE_POD_START = 'CHANGE_POD_START'
export const CHANGE_DROP = 'CHANGE_DROP'
export const CHANGE_SPEED = 'CHANGE_SPEED'
export const CHANGE_ACCELERATION = 'CHANGE_ACCELERATION'
export const CHANGE_BRAKE = 'CHANGE_BRAKE'
export const CHANGE_LEVITATION = 'CHANGE_LEVITATION'
export const CHANGE_BALL_VALVE = 'CHANGE_BALL_VALVE'
export const CHANGE_DPR = 'CHANGE_DPR'
export const CHANGE_DRIVETRAIN_SPEED = 'CHANGE_DRIVETRAIN_SPEED'
export const CHANGE_MAGWHEEL_SPEED = 'CHANGE_MAGWHEEL_SPEED'
export const CHANGE_MTV = 'CHANGE_MTV'
export const CHANGE_EC_SOLENOID = 'CHANGE_EC_SOLENOID'
export const CHANGE_DRIVE_SOLENOID = 'CHANGE_DRIVE_SOLENOID'
export const CHANGE_DRIVE_SAFETY = 'CHANGE_DRIVE_SAFETY'
export const CHANGE_LAUNCH = 'CHANGE_LAUNCH'

/** Setting controls */
export const CHANGE_CONTROL_INSTANT = 'CHANGE_CONTROL_INSTANT'
export const CHANGE_KEEP_LAST_DATA = 'CHANGE_KEEP_LAST_DATA'

/** Basic control states reported back */
export const UPDATE_CONTROL_EMERGENCY_STOP = 'UPDATE_CONTROL_EMERGENCY_STOP'
export const UPDATE_CONTROL_POD_START = 'UPDATE_CONTROL_POD_START'
export const UPDATE_CONTROL_DROP = 'UPDATE_CONTROL_DROP'
export const UPDATE_CONTROL_LEVITATION = 'UPDATE_CONTROL_LEVITATION'
export const UPDATE_CONTROL_BRAKE = 'UPDATE_CONTROL_BRAKE'
export const UPDATE_CONTROL_SPEED = 'UPDATE_CONTROL_SPEED_ACTUAL'
export const UPDATE_CONTROL_ACCELERATION = 'UPDATE_CONTROL_ACCELERATION_ACTUAL'
export const UPDATE_CONTROL_BALL_VALVE = 'UPDATE_CONTROL_BALL_VALVE'
export const UPDATE_CONTROL_DPR = 'UPDATE_CONTROL_DPR'
export const UPDATE_CONTROL_MAGWHEEL = 'UPDATE_CONTROL_MAGWHEEL'
export const UPDATE_CONTROL_MTV = 'UPDATE_CONTROL_MTV'
export const UPDATE_CONTROL_EC_SOLENOID = 'UPDATE_CONTROL_EC_SOLENOID'
export const UPDATE_CONTROL_DRIVETRAIN_SPEED = 'UPDATE_CONTROL_DRIVETRAIN_SPEED'
export const UPDATE_CONTROL_DRIVE_SOLENOID = 'UPDATE_CONTROL_DRIVE_SOLENOID'
export const UPDATE_CONTROL_DRIVE_SAFETY = 'UPDATE_CONTROL_DRIVE_SAFETY'
export const UPDATE_CONTROL_LAUNCH = 'UPDATE_CONTROL_LAUNCH'
export const UPDATE_CONTROL_BATTERY_24 = 'UPDATE_CONTROL_BATTERY_24'
export const UPDATE_CONTROL_BATTERY_48 = 'UPDATE_CONTROL_BATTERY_48'

/**
 * This action is responsible for updating all of the pod's state
 * at once
 */

export const UPDATE_STATE = 'UPDATE_STATE'

/**
 * This action is responsible for updating all of the data
 * recorded by the front end all at once
 */
export const UPDATE_DATA_POD_DATA = 'UPDATE_DATA_POD_DATA'



export const UPDATE_DATA_POD_STATE = 'UPDATE_DATA_POD_STATE'
export const UPDATE_DATA_POD_MESSAGES = 'UPDATE_DATA_POD_MESSAGES'

/** Change connection details */
export const UPDATE_CONNECTION_STATE = 'UPDATE_CONNECTION_STATE'
export const UPDATE_CONNECTION_LATENCY = 'UPDATE_CONNECTION_LATENCY'
export const UPDATE_CONNECTION_STRENGTH = 'UPDATE_CONNECTION_STRENGTH'
