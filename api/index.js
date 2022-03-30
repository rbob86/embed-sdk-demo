import express from "express";
import cors from "cors";
import sdk from "./sdk.js";

const app = express();

app.use(cors());

app.get("/signed-url", async (req, res) => {
  const src = req.query.src;
  const params = {
    target_url: `${process.env.LOOKERSDK_BASE_URL}${src}`, // https://dev.looker.rbobrowski.com/embed/dashboards-next/1?embed_domain=http%3A%2F%2Flocalhost%3A3000&sdk=2&theme=Minimal
    session_length: 3600,
    force_logout_login: true,
    external_user_id: "embed1",
    first_name: "Tester",
    last_name: "Smith",
    permissions: [
      "access_data",
      "see_lookml_dashboards",
      "see_user_dashboards",
      // 'see_looks',
      // 'explore',
      // 'create_table_calculations',
      // 'save_content',
      // 'create_public_looks',
      // 'download_with_limit',
      // 'download_without_limit',
      // 'schedule_look_emails',
      // 'schedule_external_look_emails',
      // 'create_alerts',
      // 'follow_alerts',
      // 'send_to_s3',
      // 'send_to_sftp',
      // 'send_outgoing_webhook',
      // 'send_to_integration',
      // 'see_sql',
      // 'see_lookml',
      // 'develop',
      // 'deploy',
      // 'support_access_toggle',
      // 'use_sql_runner',
      // 'clear_cache_refresh',
      // 'see_drill_overlay',
      // 'manage_spaces',
      // 'manage_homepage',
      // 'manage_models',
      // 'create_prefetches',
      // 'login_special_email',
      // 'embed_browse_spaces',
      // 'embed_save_shared_space',
      // 'see_alerts',
      // 'see_queries',
      // 'see_logs',
      // 'see_users',
      // 'sudo',
      // 'see_schedules',
      // 'see_pdts',
      // 'see_datagroups',
      // 'update_datagroups',
      // 'see_system_activity',
      // 'mobile_app_access',
    ],
    models: [process.env.LOOKERSDK_MODEL],
    // group_ids: [],
    // user_timezone?: string;
    // external_group_id: '',
    user_attributes: { locale: "en_US" },
  };
  const signedUrl = await sdk.ok(sdk.create_sso_embed_url(params));

  res.json(signedUrl);
});

const port = 3001;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
