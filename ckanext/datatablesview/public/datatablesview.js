const run_query = function(params, format) {
  const form = $('#filtered-datatables-download')[0];
  const p = $('<input name="params" type="hidden"/>');
  p.attr("value", params);
  form.append(p);
  const f = $('<input name="format" type="hidden"/>');
  f.attr("value", format);
  form.append(f);
  form.submit();
}

this.ckan.module('datatables_view', function (jQuery) {
  return {
    initialize: function() {
      const datatable = jQuery('#dtprv').DataTable({});

      // Adds download dropdown to buttons menu
      datatable.button().add(2, {
        text: 'Download',
        extend: 'collection',
        buttons: [{
          text: 'CSV',
          action: function (e, dt, button, config) {
            const params = datatable.ajax.params();
            run_query(params, 'csv');
          }
        }, {
          text: 'TSV',
          action: function (e, dt, button, config) {
            const params = datatable.ajax.params();
            run_query(params, 'tsv');
          }
        }, {
          text: 'JSON',
          action: function (e, dt, button, config) {
            const params = datatable.ajax.params();
            run_query(params, 'json');
          }
        }, {
          text: 'XML',
          action: function (e, dt, button, config) {
            const params = datatable.ajax.params();
            run_query(params, 'xml');
          }
        }]
      });
    }
  }
});
