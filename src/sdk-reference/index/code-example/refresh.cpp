try {
  kuzzle->index->refresh("nyc-open-data");

  std::cout << "0 shards fail to refresh" << std::endl;
} catch (kuzzleio::KuzzleException e) {
  std::cout << e.getMessage() << std::endl;
}
