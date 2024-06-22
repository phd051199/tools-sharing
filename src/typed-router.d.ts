/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'unplugin-vue-router/types'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/Explore': RouteRecordInfo<'/Explore', '/Explore', Record<never, never>, Record<never, never>>,
    '/Flows': RouteRecordInfo<'/Flows', '/Flows', Record<never, never>, Record<never, never>>,
    '/script/[[id]]': RouteRecordInfo<'/script/[[id]]', '/script/:id?', { id?: ParamValueZeroOrOne<true> }, { id?: ParamValueZeroOrOne<false> }>,
    '/Tools': RouteRecordInfo<'/Tools', '/Tools', Record<never, never>, Record<never, never>>,
  }
}
