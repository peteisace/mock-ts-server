/**
*
*	MOCK SERVER: parameters
*
*
*	DESCRIPTION:
*		- Exports mock server settings and parameters.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com.
*
*/

(function() {
	'use strict';

	// PARAMETERS //

	var PORT = 4242,
		URL = '',
		NIDS = new Array( 10 ),
		QUERY = '',
		AGGREGATORS,
		METRICS,
		CONFIG,
		VERSION,
		DROPCACHES;

	URL += 'http://127.0.0.1:' + PORT;

	QUERY += URL + '/api/query?';
	QUERY += 'ms=true';
	QUERY += '&';
	QUERY += 'arrays=true';
	QUERY += '&';
	QUERY += 'show_tsuids=false';
	QUERY += '&';
	QUERY += 'start=72000ms-ago';
	QUERY += '&';
	QUERY += 'end=60s-ago';
	QUERY += '&';
	QUERY += 'm=avg';
	QUERY += ':';
	QUERY += '2s-avg';
	QUERY += ':';
	QUERY += 'mem.utilization';
	QUERY += '{nid=1234}';

	for ( var i = 0; i < NIDS.length; i++ ) {
		NIDS[ i ] = i;
	}

	AGGREGATORS = [
		'avg',
		'sum',
		'min',
		'max',
		'dev',
		'zimsum',
		'mimmax',
		'mimmin'
	];

	METRICS = [
		'cpu.utilization',
		'mem.utilization',
		'disk.utilization'
	];

	CONFIG = {
		"tsd.core.auto_create_metrics": "true",
		"tsd.core.meta.enable_realtime_ts": "false",
		"tsd.core.meta.enable_realtime_uid": "false",
		"tsd.core.meta.enable_tsuid_incrementing": "false",
		"tsd.core.meta.enable_tsuid_tracking": "true",
		"tsd.core.plugin_path": "/usr/local/opentsdb/plugins",
		"tsd.core.tree.enable_processing": "true",
		"tsd.http.cachedir": "/tmp/opentsdb",
		"tsd.http.request.cors_domains": "",
		"tsd.http.request.enable_chunked": "true",
		"tsd.http.request.max_chunk": "16384",
		"tsd.http.show_stack_trace": "true",
		"tsd.http.staticroot": "/usr/local/opentsdb/staticroot/",
		"tsd.mq.enable": "true",
		"tsd.network.async_io": "true",
		"tsd.network.bind": "0.0.0.0",
		"tsd.network.keep_alive": "true",
		"tsd.network.port": PORT,
		"tsd.network.reuse_address": "true",
		"tsd.network.tcp_no_delay": "true",
		"tsd.network.worker_threads": "",
		"tsd.rpc.plugins": "net.opentsdb.tsd.DummyRpcPlugin",
		"tsd.rpcplugin.DummyRPCPlugin.hosts": "localhost",
		"tsd.rpcplugin.DummyRPCPlugin.port": "42",
		"tsd.rtpublisher.enable": "true",
		"tsd.rtpublisher.plugin": "net.opentsdb.tsd.RabbitMQPublisher",
		"tsd.rtpublisher.rabbitmq.hosts": "127.0.0.1",
		"tsd.rtpublisher.rabbitmq.pass": "********",
		"tsd.rtpublisher.rabbitmq.user": "guest",
		"tsd.rtpublisher.rabbitmq.vhost": "/",
		"tsd.search.elasticsearch.hosts": "127.0.0.1",
		"tsd.search.elasticsearch.tsmeta_type": "tsmetadata",
		"tsd.search.enable": "false",
		"tsd.search.enableindexer": "false",
		"tsd.search.plugin": "net.opentsdb.search.ElasticSearch",
		"tsd.search.tree.indexer.enable": "true",
		"tsd.stats.canonical": "true",
		"tsd.storage.enable_compaction": "false",
		"tsd.storage.flush_interval": "1000",
		"tsd.storage.hbase.data_table": "tsdb",
		"tsd.storage.hbase.meta_table": "tsdb-meta",
		"tsd.storage.hbase.tree_table": "tsdb-tree",
		"tsd.storage.hbase.uid_table": "tsdb-uid",
		"tsd.storage.hbase.zk_basedir": "/hbase",
		"tsd.storage.hbase.zk_quorum": "127.0.0.1"
	};

	VERSION = {
		"timestamp": "1362712695",
		"host": "localhost",
		"repo": "/opt/opentsdb/build",
		"full_revision": "11c5eefd79f0c800b703ebd29c10e7f924c01572",
		"short_revision": "11c5eef",
		"user": "localuser",
		"repo_status": "MODIFIED",
		"version": "2.0.0"
	};

	DROPCACHES = {
		"message": "Caches dropped",
		"status": "200"
	};


	// EXPORTS //

	module.exports = {
		'PORT': PORT,
		'URL': URL,
		'NIDS': NIDS,
		'QUERY': QUERY,
		'AGGREGATORS': AGGREGATORS,
		'METRICS': METRICS,
		'CONFIG': CONFIG,
		'VERSION': VERSION,
		'DROPCACHES': DROPCACHES
	};

})();