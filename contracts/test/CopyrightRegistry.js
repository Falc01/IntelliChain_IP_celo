const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CopyrightRegistry", function () {
  let CopyrightRegistry;
  let registry;
  let owner;
  let addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    CopyrightRegistry = await ethers.getContractFactory("CopyrightRegistry");
    registry = await CopyrightRegistry.deploy();
  });

  describe("Registration", function () {
    it("Should register a new copyright and retrieve it", async function () {
      const contentHash = "hash123";
      const title = "My Work";
      const isPending = false;

      await expect(registry.connect(addr1).registerCopyright(contentHash, title, isPending))
        .to.emit(registry, "CopyrightRegistered");

      const copyright = await registry.copyrights(contentHash);
      expect(copyright.owner).to.equal(addr1.address);
      expect(copyright.contentHash).to.equal(contentHash);
      expect(copyright.title).to.equal(title);
      expect(copyright.status).to.equal(1); // Approved
    });

    it("Should register a pending copyright", async function () {
      const contentHash = "hashPending";
      const title = "My Pending Work";
      const isPending = true;

      await registry.connect(addr1).registerCopyright(contentHash, title, isPending);

      const copyright = await registry.copyrights(contentHash);
      expect(copyright.status).to.equal(0); // Pending
    });

    it("Should fail if registering an already registered content hash", async function () {
      const contentHash = "hash123";
      const title = "My Work";
      await registry.registerCopyright(contentHash, title, false);

      await expect(
        registry.connect(addr1).registerCopyright(contentHash, "Another Title", false)
      ).to.be.revertedWith("Copyright already registered");
    });

    it("Should fail if content hash is empty", async function () {
      await expect(
        registry.registerCopyright("", "Title", false)
      ).to.be.revertedWith("Content hash cannot be empty");
    });
  });
});
